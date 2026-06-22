# Deploying to Google Cloud (Cloud Run)

This app ships as a container and runs on **Cloud Run**. The image is built from
the [`Dockerfile`](./Dockerfile) (Next.js `output: 'standalone'`, served by
`node server.js` on `$PORT`).

## Prerequisites (one-time per project)

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Enable the APIs used below
gcloud services enable \
  run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

# Create a Docker repo in Artifact Registry
gcloud artifacts repositories create web \
  --repository-format=docker --location=us-central1

# Let Cloud Build deploy to Cloud Run
PROJECT_NUMBER=$(gcloud projects describe "$(gcloud config get-value project)" --format='value(projectNumber)')
gcloud projects add-iam-policy-binding "$(gcloud config get-value project)" \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role=roles/run.admin
gcloud projects add-iam-policy-binding "$(gcloud config get-value project)" \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role=roles/iam.serviceAccountUser
```

## Deploy

Build, push, and deploy in one step using [`cloudbuild.yaml`](./cloudbuild.yaml):

```bash
gcloud builds submit --config cloudbuild.yaml \
  --substitutions=_REGION=us-central1,_SERVICE=humanfirst-web,_REPO=web,_TAG=latest
```

> **Quickest alternative** (no `cloudbuild.yaml`): `gcloud run deploy humanfirst-web --source . --region us-central1 --allow-unauthenticated` — Cloud Run builds the `Dockerfile` for you.

## Environment variables

| Variable | When it's read | How to set |
| --- | --- | --- |
| `NEXT_PUBLIC_CALENDLY_URL` | **Build time** (inlined into the client bundle) | Pass `_NEXT_PUBLIC_CALENDLY_URL=...` in the `--substitutions` above |
| `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_FROM` | **Run time** (contact-form API) | Set on the service (below) |

Set the runtime email vars on the deployed service:

```bash
gcloud run services update humanfirst-web --region us-central1 \
  --update-env-vars EMAIL_HOST=smtp.gmail.com,EMAIL_PORT=587,EMAIL_SECURE=false \
  --update-env-vars EMAIL_USER=you@gmail.com,EMAIL_PASSWORD=your-app-password
```

For real secrets, prefer [Secret Manager](https://cloud.google.com/run/docs/configuring/services/secrets)
(`--set-secrets`) over plain env vars.

See [`.env.example`](./.env.example) for the full list of variables.
