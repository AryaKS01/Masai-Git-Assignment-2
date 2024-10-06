
# Git Command Cheatsheet

## 1. Setting Up a Repository

### `git init`
**Description**: Initializes a new Git repository in the current directory.
```
git init
```

### `git clone`
**Description**: Clones an existing remote repository to your local machine.
```
git clone <repository-url>
```

## 2. Checking Repository Status

### `git status`
**Description**: Shows the status of changes in the working directory and staging area.
```
git status
```

## 3. Staging and Committing Changes

### `git add`
**Description**: Adds changes from the working directory to the staging area.

**Stage a single file**:
```
git add <filename>
```

**Stage all files**:
```
git add .
```

### `git commit`
**Description**: Saves the staged changes in the local repository with a descriptive message.
```
git commit -m "Your commit message"
```

## 4. Viewing History and Logs

### `git log`
**Description**: Displays the commit history.
```
git log
```

### `git log --oneline`
**Description**: Shows the commit history in a compact, one-line-per-commit format.
```
git log --oneline
```

## 5. Branching and Merging

### `git branch`
**Description**: Lists all branches in the repository or creates a new branch.

**List branches**:
```
git branch
```

**Create a new branch**:
```
git branch <branch-name>
```

### `git checkout`
**Description**: Switches to another branch or commit.
```
git checkout <branch-name>
```

### `git merge`
**Description**: Merges the specified branch into the current branch.
```
git merge <branch-name>
```

## 6. Working with Remotes

### `git remote add origin`
**Description**: Adds a remote repository (usually on GitHub) to your local repository.
```
git remote add origin <repository-url>
```

### `git push`
**Description**: Pushes the local changes to the remote repository.
```
git push origin <branch-name>
```

### `git pull`
**Description**: Fetches and merges changes from the remote repository into the current branch.
```
git pull origin <branch-name>
```

## 7. Undoing Changes

### `git reset`
**Description**: Resets the staging area and/or working directory to a previous state.
```
git reset <commit-hash>
```

### `git checkout -- <file>`
**Description**: Discards changes in the working directory for the specified file.
```
git checkout -- <file>
```

## 8. Deleting Branches

### `git branch -d`
**Description**: Deletes a branch that has been fully merged.
```
git branch -d <branch-name>
```