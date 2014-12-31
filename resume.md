---
layout: resume
title: curriculum
---

{% assign resume = site.data.resume %}

<div class="resume-section">
  <div class="column-20">
      <img 
        src="{{ "/thumbnails/" | append: resume.basics.picture | prepend: site.baseurl | prepend: site.url }}" 
        alt="{{ post.title }}" class="img-thumbnail">
  </div>
  <div class="column-80">
    <h4>{{ resume.basics.name }} </h4>
    <address>
      {{ resume.basics.location.address }} <br/>
      {{ resume.basics.location.city.}},
      {{ resume.basics.location.postalCode }},
      {{ resume.basics.location.country }}
    </address>
    <p>
      Phone: {{ resume.basics.phone }}<br/>
      Email: <a href="mailto:{{ resume.basics.email }}">
      {{ resume.basics.email }}
      </a><br/>
      GitHub: <a href="{{ resume.basics.github }}" target="_blank">
      {{ resume.basics.github }}
      </a><br/>
    </p>
  </div>
</div>

<h5 class="header">Profile</h5>
<div class="resume-section">
  <p>
    {{ resume.basics.summary }}
  </p>
</div>

<h5 class="header">Education</h5>
<div class="resume-section">
{% for edu in resume.education %}
  <div class="column-20">
    <p>{{ edu.startDate }} {% if edu.endDate != '' %}- {{ edu.endDate }}{% endif %}</p>
  </div>
  <div class="column-80">
    <p>{{ edu.area }} {% if edu.studyType != '' %}, {{ edu.studyType }} {% endif %}</p>
    <p>{{ edu.institution }}</p>
  </div>
{% endfor %}
</div>

<h5 class="header">Distinctions</h5>
<div class="resume-section">
{% for distinction in resume.distinctions %}
  <div class="column-20">
    <p>{{ distinction.studyType}}</p>
  </div>
  <div class="column-80">
    <p>{{ distinction.description }}</p>
  </div>
{% endfor %}
</div>

<h5 class="header">Work</h5>
<div class="resume-section">
{% for w in resume.work %}
 <div class="column-20">
   <p>{{ w.startDate }} {% if w.endDate != '' %}- {{ w.endDate }}{% endif %}</p>
 </div>
 <div class="column-80">
   <p>{{ w.company }}, {{ w.position }}</p>
   <ul>
   {% for point in w.highlights %}
   <li>
     {{ point }}
   </li>
   {% endfor %}
   </ul>
 </div>
{% endfor %}
</div>

<h5 class="header">Skills</h5>
<div class="resume-section">
{% for skill in resume.skills %}
 <div class="column-20">
   <p>{{ skill.name }}</p>
 </div>
 <div class="column-80">
   <p>{{ skill.description }}</p>
   <ul>
   <li>
    {{ skill.keywords | array_to_sentence_string }}
   </li>
   </ul>
 </div>
{% endfor %}
</div>


<h5 class="header">Open source projects</h5>
<div class="resume-section">
{% for project in resume.opensourceProjects %}
<div class="column-20">
  <p>{{ project.type }}</p>
</div>
<div class="column-80">
  <p>{{ project.name }}</p>
  <p>{{ project.description }} Source code available on <a title="{{ project.name }}" href="{{ project.url }}" target="_blank">{{ project.urlLabel}}</a></p>
</div>
{% endfor %}
</div>

<h5 class="header">Other</h5>
<div class="resume-section">
  <div class="column-20">
    <p>Languages</p>
  </div>
  <div class="column-80">
    <p>{{ resume.languages[0].fluency }} in {{ resume.languages[0].language | array_to_sentence_string }}</p>
  </div>
  <div class="column-20">
    <p>License</p>
  </div>
  <div class="column-80">
    <p>{{ resume.license | array_to_sentence_string }}</p>
  </div>
</div>