---
layout: post
title: "Understanding file, folder permission on linux"
description: "Today post about File/Folder permission on linux. This may be helpful for newbies who likely to
be work on linux distributions. I have been using linux over years now, so for me it is better than the other platforms."
permalink: file-folder-permission-on-linux
image: '/assets/images/file-permission-large.jpg'
seoDescription: 'Read about file, folder permission in linux by Gayan Virajith'
seoTitle: 'File, folder permission recursively on linux | Gayan Virajith'
---

{{ page.description }}

## Permission basics

### Permission groups

On each file and directory(folder) has three user based permission groups.

- Owner - The owner of the directory
- Group - Group that has been assigned for this file/directory
- User  - All the other users in the system

### Permission types

On every file and directory has three types of permission

- Read      - Capability of read the contents of the file
- Write     - Capability of write/modify the contents of the file or directory
- Execute   - Capability of execute a file or view the contents of a directory

### Check permission

To see the permission settings for a file, we can use the `ls` command as follows:

<pre class="terminal">
gayan:gayanvirajith.github.io$ ls -l
-rw-rw-r--  1 gayan gayan 2601 Jun 22 10:09 Rakefile
...
</pre>

We can determine a lot from examining the results of this command:

-   The file "Rakefile" owned by the user "gayan"
-   User "gayan" has authorize to read and write this file
-   The file is owned by the group "gayan"
-   Members of the group "gayan" can also read and write this file
-   Everybody else(other users) can read this file

## Changing file permission

To change the file/folder permission, we can use `chmod` command.

An easy way to remember permission settings as a series of bits (0's and 1's). Here how it works:

<pre>
rwx rwx rwx # 111 111 111
rw- rw- rw- # 110 110 110
rwx --- --- # 111 000 000
</pre>

How it looks in binary:

{% highlight ruby %}
rwx = 111 in binary = 7
rw- = 110 in binary = 6
r-x = 101 in binary = 5
r-- = 100 in binary = 4
{% endhighlight %}

Now you've got the idea!(I believe). So if you combine each of three sets of permissions as single digit,
you would get permission setting value in a convenient way.

For an example let say if you want to set `some-file.txt` to have read and write permission for owner
, but wanted to keep the file private from others. You could do this as follows:

<pre class="terminal">
gayan:gayanvirajith.github.io$ chmod 600 some-file.txt
</pre>

## Advanced usage

### Change file/folder permission in a recursive way

##### Change all folder / sub folders / files to 755
<pre class="terminal">
gayan:gayanvirajith.github.io$ ls -l
total xx
drwxrwxr-x  3 gayan gayan 4096 Jun 21 02:52 assets
gayan:gayanvirajith.github.io$ chmod 755 -R assets
</pre>

##### Change all folders and sub directories to 755
<pre class="terminal">
gayan:gayanvirajith.github.io$ ls -l
total xx
drwxrwxr-x  3 gayan gayan 4096 Jun 21 02:52 assets
gayan:gayanvirajith.github.io$ find ./assets -type d -exec chmod 755 {} \;
</pre>

##### Change all files to 755
<pre class="terminal">
gayan:gayanvirajith.github.io$ ls -l
total xx
drwxrwxr-x  3 gayan gayan 4096 Jun 21 02:52 assets
gayan:gayanvirajith.github.io$ find ./assets -type f -exec chmod 644 {} \;
</pre>

Hope this article would helpful to you, So wish you the best in your future with
Linux-based systems.



