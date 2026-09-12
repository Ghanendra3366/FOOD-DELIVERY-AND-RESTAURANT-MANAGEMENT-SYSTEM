# Contribution guide

## One-time GitHub setup by the team lead

1. Create an empty GitHub repository named `the-markets` from your own GitHub account. Do not initialize it with a conflicting README if this local README will be the initial commit.
2. In the project folder, initialize Git, rename the default branch to `main`, and make a documentation-only initial commit.
3. Add the GitHub remote and push `main`.
4. Create one branch for each contributor and push each branch.

```powershell
git init
git branch -M main
git add README.md .gitignore docs
git commit -m "docs: initialize project architecture"
git remote add origin https://github.com/YOUR-USERNAME/the-markets.git
git push -u origin main

git switch -c feature/lead
git push -u origin feature/lead
git switch main
git switch -c feature/member-2
git push -u origin feature/member-2
git switch main
git switch -c feature/member-3
git push -u origin feature/member-3
git switch main
git switch -c feature/member-4
git push -u origin feature/member-4
```

Replace `YOUR-USERNAME` with the lead's account name. Each member must authenticate to GitHub using their own account before pushing. Never share passwords or personal access tokens in the repository, messages, or commits.

## Everyday member workflow

```powershell
git switch feature/member-2
git pull --rebase origin main
# make only assigned changes
git add pages css assets
git commit -m "feat: add customer order tracking page"
git push
```

When a member needs the latest main branch, use `git pull --rebase origin main` before coding and resolve any conflicts on their own feature branch.

## Commit convention

Use Conventional Commits:

- `feat:` new page or user-visible capability
- `fix:` broken links, layout, or accessibility correction
- `style:` visual/CSS-only refinement
- `refactor:` structure improvement without UI behavior change
- `docs:` documentation only
- `chore:` maintenance

## Pull request checklist

- Describe what was changed and which pages are affected.
- State the tested viewport sizes.
- Check links, labels, image alt text, heading order, and focus visibility.
- Confirm no JavaScript, inline CSS, dependencies, secrets, or unrelated files were added.
- Request review from the team lead; only the lead merges approved work into `main`.

