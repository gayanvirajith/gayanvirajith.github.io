---
layout: post
title: "Blue-VR ProcessWire CMS Theme"
category: community-project
thumbnail: harmony-thumb.jpg
thumbnail_small: blue-vr-thumb-sm.jpg
thumbnail_large: blue-vr-thumb-lg.jpg
tags: []
permalink: blue-vr-processwire-theme
meta_description: Blue-VR is a ProcessWire site profile based on Bootstrap 3.1 by Gayan Virajith and Maheshika Lakmali. Sourced on Github -  https://github.com/gayanvirajith/BlueVrSiteProfile
browser_title: Blue-VR ProcessWire CMS Theme theme by Gayan Viarjith and Maheshika Lakmali
---

A **free** corporate theme for [ProcessWire CMS/CMF][pw] version 2.3+. 
The front-end uses the Bootstrap 3.1 css framework for to get the 
responsiveness and mobile friendliness. [Download the source][download] from 
Github.

<!--more-->

Designed, built with love by [Gayan Virajith](http://gayan.me "Gayan Virajith (Web developer)") & [Maheshika Lakmali](http://maheshikalakmali.github.io "Maheshika Lakmali (Graphic designer)").

<br/>

<span class="project-img-wrap-bottom">
![Jekyll Harmony theme ]({{ "/thumbnails/" | append: page.thumbnail_large | prepend: site.baseurl | prepend: site.url  }})
</span>

### Overall features

 * HTML5 & CSS3 + ({less})
 * Build with bootstrap 3.1
 * SEO Friendly
 * Clean & modern design
 * Responsive markup
 * Contact form and google map locations with multiple google markers
 * Testimonials using bxSlider
 * AIOM supports (Just install the module no need to touch the code)

### How to install

Please take a copy of the [latest ProcessWire](http://processwire.com/download/). 
Replace the *install*, *modules* and *templates* directories with those in 
this profile, as shown below: 

- /site-default/install/
- /site-default/modules/
- /site-default/templates/ 

Make sure you do following steps as well

 1. Add `tinymce` directory into /site-defaut.
 2. Modify the following two lines on your `/site-default/config.php` file: 

{% highlight php %}
$config->prependTemplateFile = '_init.php';
$config->appendTemplateFile = '_main.php';
{% endhighlight %}
Please read the complete [reference guide on GitHub][download].

#### License

Free / Open sourced under [MIT][license]

[pw]: http://processwire.com/
[download]: https://github.com/gayanvirajith/BlueVrSiteProfile
[license]: https://raw.githubusercontent.com/gayanvirajith/BlueVrSiteProfile/master/LICENSE