import{_ as e,r as o,o as p,c,a,b as t,F as l,d as n,e as r}from"./app.4fb1202a.js";const i={},u=a("h1",{id:"quick-start",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),n(" Quick Start")],-1),d=a("h2",{id:"requirements",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),n(" Requirements")],-1),h=a("p",null,"Host server with the following installed software:",-1),k={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},b=n("Git"),g={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},m=n("Docker-Compose"),_=r(`<h2 id="step-by-step" tabindex="-1"><a class="header-anchor" href="#step-by-step" aria-hidden="true">#</a> Step-By-Step</h2><h3 id="_1-download-kibanalytics-code-repository" tabindex="-1"><a class="header-anchor" href="#_1-download-kibanalytics-code-repository" aria-hidden="true">#</a> 1. Download Kibanalytics Code Repository</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/kibanalytics/kibanalytics.git
<span class="token builtin class-name">cd</span> kibanalytics
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-copy-default-configuration-files" tabindex="-1"><a class="header-anchor" href="#_2-copy-default-configuration-files" aria-hidden="true">#</a> 2. Copy Default Configuration Files</h3><p>By default, all CORS origins are allowed to call Kibanalytics back-end server.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env
<span class="token function">cp</span> -r .config.example .config
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>It&#39;s recomended to change the EXPRESS_SESSION_SECRET and ELASTICSEARCH_PASSWORD environment variables default values before running Kibanalytics in production.</p></div><h3 id="_3-start-docker-services" tabindex="-1"><a class="header-anchor" href="#_3-start-docker-services" aria-hidden="true">#</a> 3. Start Docker Services</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> --profile <span class="token builtin class-name">local</span> --profile production up -d --build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-load-default-dashboards" tabindex="-1"><a class="header-anchor" href="#_4-load-default-dashboards" aria-hidden="true">#</a> 4. Load Default Dashboards</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> <span class="token function">node</span> <span class="token function">npm</span> run load-dashboards
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_5-add-front-end-tracking-library" tabindex="-1"><a class="header-anchor" href="#_5-add-front-end-tracking-library" aria-hidden="true">#</a> 5. Add Front-End Tracking Library</h3><p>Remember to change the server URL according to your server hostname / domain if you&#39;re not running on localhost.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My Website To Track<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:3000/kbs.js<span class="token punctuation">&quot;</span></span> 
            <span class="token attr-name">data-server-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:3000/collect<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My Website Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>My Website Main Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,14),f=n("Alternatively you can access "),v={href:"http://my-kibanalytics-server-host:3000",target:"_blank",rel:"noopener noreferrer"},y=n("http://localhost:3000"),x=n(" to interact with some example pages."),q=a("h3",{id:"_6-open-example-dashboard",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_6-open-example-dashboard","aria-hidden":"true"},"#"),n(" 6. Open Example Dashboard")],-1),S=n("By accessing "),E={href:"http://localhost:5601/app/dashboards",target:"_blank",rel:"noopener noreferrer"},C=n("http://localhost:5601/app/dashboards"),R=n(".");function w(D,T){const s=o("ExternalLinkIcon");return p(),c(l,null,[u,d,h,a("ul",null,[a("li",null,[a("a",k,[b,t(s)])]),a("li",null,[a("a",g,[m,t(s)])])]),_,a("p",null,[f,a("a",v,[y,t(s)]),x]),q,a("p",null,[S,a("a",E,[C,t(s)]),R])],64)}var A=e(i,[["render",w],["__file","index.html.vue"]]);export{A as default};
