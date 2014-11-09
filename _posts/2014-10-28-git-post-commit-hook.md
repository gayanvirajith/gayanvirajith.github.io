---
layout: post
title: "Git post commit hook"
description: ""
category: 
tags: []
permalink: git-post-commit-hook
meta_description: Get to know about git post-commit. It invokes after a commit is made by Gayan Virajith
---


Like every other version constrol systems, Git has a method to execute custom 
scrips when particular actions occur. We are calling it **Git Hooks**.

### How git hook works

Every Git repository has a `.git/hooks` folder. Where you can add/update these
scrips as whenever you need to. So Git will execute these scripts when 
particular actions occur.  

### Post commit

Post commit hook is invoking by `git commit`.  It takes no parameter, 
and is invoked after a commit is made.

### Real world example 

Following post-commit hook is useful if you are managing 
[Github Project Pages][gh-pages].
We have to place this post-commit file under `.git/hooks/`. 
Make sure `post-commit` file has execute permisson. This hook will fire when you
commit changes to the master branch, and sync master branch changes to gh-pages.

{% highlight sh linenos %}
#!/bin/sh
# Filepath - .git/hooks/post-commit
# Mirror master in gh-pages. 
git checkout gh-pages
git merge master
git checkout master
{% endhighlight %}

#### Further references about git hooks

- [Git-scm.com][git-scm] Customizing-Git-Git-Hooks
- [Githooks.com][githooks] by [Matthew Hudson][matthewgh] 

[gh-pages]: https://help.github.com/articles/creating-project-pages-manually/
[githooks]: http://githooks.com/
[matthewgh]: http://matthewhudson.me/
[git-scm]: http://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

