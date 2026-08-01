# Olive Brew

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Add it as remote and push the `main` branch:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git add .
git commit -m "Set up GitHub Pages deployment"
git push -u origin main
```

3. In GitHub, open repository settings:
	- Go to `Settings -> Pages`.
	- Ensure `Source` is `GitHub Actions`.

After each push to `main`, the workflow in `.github/workflows/deploy.yml` builds and publishes the site.
