import{_ as i,r,o,c as d,a as e,b as a,F as l,d as t,e as n}from"./app.4fb1202a.js";const c={},h=e("h1",{id:"setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setup","aria-hidden":"true"},"#"),t(" Setup")],-1),p=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),t(" Requirements")],-1),_=t("The only requirement for Kibanalytics is a server with "),u={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g=t("Git"),f=t(" and "),S={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},b=t("Docker-Compose"),m=t(" installed. All required services are build and abtracted Docker containers."),E=e("h2",{id:"source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),t(" Source Code")],-1),x={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},y=t("Git"),v=t(" is a free and open source distributed version control system."),R=n(`<p>The easiest way to get Kibanalytics source code is by installing Git and running the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/kibanalytics/kibanalytics.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Before starting Kibanalytics, it&#39;s mandatory to provide some basic configuration files and environment variales.</p><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><p>Kibanalytics will look for a .env file at the root of the project folder to apply settings to the server.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Use .env.example as base for your environment variables setup. If you just want start straightaway, just rename .env.example to .env and use all default values.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>It&#39;s recomended to change the EXPRESS_SESSION_SECRET and ELASTICSEARCH_PASSWORD environment variables default values before running Kibanalytics in production.</p></div><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:center;">Type</th><th style="text-align:right;">Allowed Values</th></tr></thead><tbody><tr><td style="text-align:left;">NODE_ENV</td><td style="text-align:center;">string</td><td style="text-align:right;">&#39;development&#39;, &#39;production&#39;</td></tr><tr><td style="text-align:left;">NODE_CLUSTER</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">NODE_LISTEN</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid host IP and port number</td></tr><tr><td style="text-align:left;">EXPRESS_HELMET</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">EXPRESS_GZIP</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">EXPRESS_CORS</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">EXPRESS_ALLOWED_ORIGINS</td><td style="text-align:center;">[string]</td><td style="text-align:right;">Any valid RegExp</td></tr><tr><td style="text-align:left;">EXPRESS_SESSION_NAME</td><td style="text-align:center;">string</td><td style="text-align:right;">Any string</td></tr><tr><td style="text-align:left;">EXPRESS_SESSION_SECRET</td><td style="text-align:center;">string</td><td style="text-align:right;">Any string</td></tr><tr><td style="text-align:left;">EXPRESS_SESSION_COOKIE_MAX_AGE</td><td style="text-align:center;">int</td><td style="text-align:right;">Number &gt;= 0</td></tr><tr><td style="text-align:left;">EXPRESS_SESSION_COOKIE_SAME_SITE</td><td style="text-align:center;">string</td><td style="text-align:right;">&#39;0&#39;, &#39;1&#39;, lax&#39;, &#39;none&#39; or &#39;strict&#39;</td></tr><tr><td style="text-align:left;">EXPRESS_SESSION_COOKIE_SECURE</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">EXPRESS_SESSION_DURATION</td><td style="text-align:center;">int</td><td style="text-align:right;">Number &gt;= 0</td></tr><tr><td style="text-align:left;">EXPRESS_VALIDATE_JSON_SCHEMA</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">EXPRESS_PUBLIC_FOLDER</td><td style="text-align:center;">int</td><td style="text-align:right;">0, 1</td></tr><tr><td style="text-align:left;">SENTRY_DSN</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid Sentry DSN URL</td></tr><tr><td style="text-align:left;">LOGSTASH_REDIS_HOST</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid Redis host</td></tr><tr><td style="text-align:left;">LOGSTASH_REDIS_PORT</td><td style="text-align:center;">int</td><td style="text-align:right;">Valid Redis host port number</td></tr><tr><td style="text-align:left;">REDIS_LISTEN</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid host IP and port number</td></tr><tr><td style="text-align:left;">REDIS_QUEUE_SERVER_URI</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid Redis URI</td></tr><tr><td style="text-align:left;">REDIS_SESSION_SERVER_URI</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid Redis URI</td></tr><tr><td style="text-align:left;">TWEMPROXY_LISTEN</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid host IP and port number</td></tr><tr><td style="text-align:left;">ELASTICSEARCH_LISTEN</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid host IP and port number</td></tr><tr><td style="text-align:left;">ELASTICSEARCH_URI</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid Elasticsearch URI</td></tr><tr><td style="text-align:left;">ELASTICSEARCH_SECURITY</td><td style="text-align:center;">bool</td><td style="text-align:right;">true, false</td></tr><tr><td style="text-align:left;">ELASTICSEARCH_USERNAME</td><td style="text-align:center;">string</td><td style="text-align:right;">Any string</td></tr><tr><td style="text-align:left;">ELASTICSEARCH_PASSWORD</td><td style="text-align:center;">string</td><td style="text-align:right;">Any string</td></tr><tr><td style="text-align:left;">KIBANA_LISTEN</td><td style="text-align:center;">string</td><td style="text-align:right;">Valid host IP and port number</td></tr><tr><td style="text-align:left;">DOCKER_LOG_MAX_SIZE</td><td style="text-align:center;">string</td><td style="text-align:right;">Number &gt;= 1 suffixed with magnitude</td></tr><tr><td style="text-align:left;">DOCKER_LOG_MAX_FILE</td><td style="text-align:center;">int</td><td style="text-align:right;">Number &gt;= 1</td></tr></tbody></table><h3 id="node-env" tabindex="-1"><a class="header-anchor" href="#node-env" aria-hidden="true">#</a> NODE_ENV</h3><p>Flag which indicates whether the server is running on development or production mode.</p><p>If you&#39;re running Node.js outside of docker enviroment, set the value of NODE_ENV to &quot;development&quot;.</p><h3 id="node-cluster" tabindex="-1"><a class="header-anchor" href="#node-cluster" aria-hidden="true">#</a> NODE_CLUSTER</h3>`,12),I=t("Flag to enable or disable Node.js "),k={href:"https://nodejs.org/api/cluster.html",target:"_blank",rel:"noopener noreferrer"},T=t("clustering"),w=t("."),A=e("p",null,"This can drastically improve the performance on multicore deployments by starting one process for each core and distributing the load of requests to the web server.",-1),O=e("h3",{id:"node-listen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-listen","aria-hidden":"true"},"#"),t(" NODE_LISTEN")],-1),C=e("p",null,"Expose Node Docker service host ip and port number for external connections.",-1),N=e("h3",{id:"express-helmet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#express-helmet","aria-hidden":"true"},"#"),t(" EXPRESS_HELMET")],-1),L=e("p",null,"Define several security HTTP response headers to secure the web server.",-1),D=t("Uses "),P={href:"https://github.com/helmetjs/helmet",target:"_blank",rel:"noopener noreferrer"},U=t("Helmet"),X=t(" library for Express web servers."),K=e("p",null,"If the Kibanalytics web server will be used in conjunction with a reverse proxy server, is recomended to disable Helmet and set all security HTTP headers directly on the proxy.",-1),H=e("h3",{id:"express-gzip",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#express-gzip","aria-hidden":"true"},"#"),t(" EXPRESS_GZIP")],-1),V=e("p",null,"Flag to enable or disable HTTP response compress.",-1),q=e("p",null,"If the Kibanalytics web server will be used in conjunction with a reverse proxy server, is recomended to disable Kibanalytics compression and let the reverse proxy take care of it.",-1),G=e("h3",{id:"express-cors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#express-cors","aria-hidden":"true"},"#"),t(" EXPRESS_CORS")],-1),M=t("Flag to enable or disable "),F={href:"https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"},j=t("CORS"),B=t(". Used with EXPRESS_ALLOWED_ORIGINS environment variable."),W=n('<h3 id="express-allowed-origins" tabindex="-1"><a class="header-anchor" href="#express-allowed-origins" aria-hidden="true">#</a> EXPRESS_ALLOWED_ORIGINS</h3><p>Comma separated RegExp values of allowed origins (for example .*virail.[a-z..]+) for CORS. Used with EXPRESS_CORS environment variable.</p><h3 id="express-session-name" tabindex="-1"><a class="header-anchor" href="#express-session-name" aria-hidden="true">#</a> EXPRESS_SESSION_NAME</h3><p>The name of the session cookie to set in the response (and read from in the request).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you have multiple apps running on the same hostname then you need to use distinct session cookies from each one. The simplest way is to set different name session names per app.</p></div><h3 id="express-session-secret" tabindex="-1"><a class="header-anchor" href="#express-session-secret" aria-hidden="true">#</a> EXPRESS_SESSION_SECRET</h3><p>This is the secret used to sign the session cookie. Using a secret that cannot be guessed will reduce the ability to hijack a session by guessing the session name.</p><p>Changing the secret value will invalidate all existing sessions.</p><h3 id="express-session-cookie-max-age" tabindex="-1"><a class="header-anchor" href="#express-session-cookie-max-age" aria-hidden="true">#</a> EXPRESS_SESSION_COOKIE_MAX_AGE</h3><p>Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute. This is done by taking the current server time and adding maxAge milliseconds to the value to calculate an Expires datetime. By default, 7776000000 (90d) is set.</p><h3 id="express-session-cookie-same-site" tabindex="-1"><a class="header-anchor" href="#express-session-cookie-same-site" aria-hidden="true">#</a> EXPRESS_SESSION_COOKIE_SAME_SITE</h3><p>Specifies the boolean or string to be the value for the SameSite Set-Cookie attribute. By default, this is &#39;1&#39;.</p><p>&#39;1&#39; will set the SameSite attribute to Strict for strict same site enforcement.</p><p>&#39;0&#39; will not set the SameSite attribute.</p><p>&#39;lax&#39; will set the SameSite attribute to Lax for lax same site enforcement.</p><p>&#39;none&#39; will set the SameSite attribute to None for an explicit cross-site cookie.</p><p>&#39;strict&#39; will set the SameSite attribute to Strict for strict same site enforcement.</p><h3 id="express-session-cookie-secure" tabindex="-1"><a class="header-anchor" href="#express-session-cookie-secure" aria-hidden="true">#</a> EXPRESS_SESSION_COOKIE_SECURE</h3><p>Specifies the boolean value for the Secure Set-Cookie attribute. When &#39;1&#39;, the Secure attribute is set, otherwise it is not. By default, the Secure attribute is &#39;0&#39;.</p><h3 id="express-session-duration" tabindex="-1"><a class="header-anchor" href="#express-session-duration" aria-hidden="true">#</a> EXPRESS_SESSION_DURATION</h3><p>Session duration is defined as the time frame during which there are regular active interactions occurring between a user. The session is timed out when there is no activity from the user for a predefined time duration of 1800000ms (30 minutes by default).</p><h3 id="express-validate-json-schema" tabindex="-1"><a class="header-anchor" href="#express-validate-json-schema" aria-hidden="true">#</a> EXPRESS_VALIDATE_JSON_SCHEMA</h3><p>Enable custom event payload validation.</p><h3 id="express-public-folder" tabindex="-1"><a class="header-anchor" href="#express-public-folder" aria-hidden="true">#</a> EXPRESS_PUBLIC_FOLDER</h3><p>Serve the public folder on the web server. Used to for development &amp; testing.</p><h3 id="sentry-dsn" tabindex="-1"><a class="header-anchor" href="#sentry-dsn" aria-hidden="true">#</a> SENTRY_DSN</h3>',26),z=t("Enable "),Y={href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"},Z=t("Sentry"),J=t(" performance and error tracking."),Q=n('<p>Disable with empty value.</p><h3 id="logstash-redis-host" tabindex="-1"><a class="header-anchor" href="#logstash-redis-host" aria-hidden="true">#</a> LOGSTASH_REDIS_HOST</h3><p>Redis queue server hostname.</p><h3 id="logstash-redis-port" tabindex="-1"><a class="header-anchor" href="#logstash-redis-port" aria-hidden="true">#</a> LOGSTASH_REDIS_PORT</h3><p>Redis queue server port.</p><h3 id="redis-listen" tabindex="-1"><a class="header-anchor" href="#redis-listen" aria-hidden="true">#</a> REDIS_LISTEN</h3><p>Expose Redis Docker service host ip and port number for external connections.</p><h3 id="redis-queue-server-uri" tabindex="-1"><a class="header-anchor" href="#redis-queue-server-uri" aria-hidden="true">#</a> REDIS_QUEUE_SERVER_URI</h3><p>Redis queue server connection URI. Needs to use the same values from LOGSTASH_REDIS_HOST and LOGSTASH_REDIS_PORT variables. This is necessary because some services needs to use hostname / port and others only accept URI connection string.</p><h3 id="redis-session-server-uri" tabindex="-1"><a class="header-anchor" href="#redis-session-server-uri" aria-hidden="true">#</a> REDIS_SESSION_SERVER_URI</h3><p>Redis session server connection URI.</p><h3 id="twemproxy-listen" tabindex="-1"><a class="header-anchor" href="#twemproxy-listen" aria-hidden="true">#</a> TWEMPROXY_LISTEN</h3><p>Expose Twemproxy Docker service host ip and port number for external connections.</p><h3 id="elasticsearch-listen" tabindex="-1"><a class="header-anchor" href="#elasticsearch-listen" aria-hidden="true">#</a> ELASTICSEARCH_LISTEN</h3><p>Expose Elasticsearch Docker service host ip and port number for external connections.</p><h3 id="elasticsearch-uri" tabindex="-1"><a class="header-anchor" href="#elasticsearch-uri" aria-hidden="true">#</a> ELASTICSEARCH_URI</h3>',16),$={href:"https://www.elastic.co",target:"_blank",rel:"noopener noreferrer"},ee=t("Elasticsearch"),te=t(" server connection URI."),se=n('<p>To point to the local Elasticsearch server started with Docker Compose, use the value &quot;http://elasticsearch:9200&quot; as it is an alias to the internal Docker network Elasticsearch host.</p><p>If NODE_ENV is set to &quot;development&quot;, Node.js server will override ELASTICSEARCH_URI value to &quot;http://localhost:9200&quot;.</p><h3 id="elasticsearch-security" tabindex="-1"><a class="header-anchor" href="#elasticsearch-security" aria-hidden="true">#</a> ELASTICSEARCH_SECURITY</h3><p>Enable or disable Elasticsearch security. By enabling this flag, Kibana access will also require an username &amp; password for access.</p><h3 id="elasticsearch-username" tabindex="-1"><a class="header-anchor" href="#elasticsearch-username" aria-hidden="true">#</a> ELASTICSEARCH_USERNAME</h3><p>Elasticsearch username. Used with ELASTICSEARCH_SECURITY=true.</p><h3 id="elasticsearch-password" tabindex="-1"><a class="header-anchor" href="#elasticsearch-password" aria-hidden="true">#</a> ELASTICSEARCH_PASSWORD</h3><p>Elasticsearch password. Used with ELASTICSEARCH_SECURITY=true.</p><h3 id="kibana-listen" tabindex="-1"><a class="header-anchor" href="#kibana-listen" aria-hidden="true">#</a> KIBANA_LISTEN</h3><p>Expose Kibana Docker service host ip and port number for external connections.</p><h3 id="docker-log-max-size" tabindex="-1"><a class="header-anchor" href="#docker-log-max-size" aria-hidden="true">#</a> DOCKER_LOG_MAX_SIZE</h3><p>Docker log file max size.</p><h3 id="docker-log-max-file" tabindex="-1"><a class="header-anchor" href="#docker-log-max-file" aria-hidden="true">#</a> DOCKER_LOG_MAX_FILE</h3><p>Docker log files max count.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>',15),ae={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},ne=t("Docker-Compose"),ie=t(" is a tool that helps to define and share multi-container applications. As Kibanalytics is composed by a stack of open source projects, it's easier for a quick start to use containers."),re=e("p",null,"It's necessary to install Docker and Docker-Compose to the host/server where Kibanalytics will run.",-1),oe={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},de=t("Docker instalation setup"),le={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},ce=t("Docker-Compose instalation setup"),he=n(`<p>After completing all the setup steps from Docker and Docker-Compose, to start Kibanalytics using the default configuration, run the following commands:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> kibanalytics
<span class="token function">cp</span> .env.example .env
<span class="token function">cp</span> -r .config.example .config
<span class="token function">docker-compose</span> --profile <span class="token builtin class-name">local</span> --profile production up -d --build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),pe=t("If you're starting Kibanalytics for the first time, it's necessary to "),_e={href:"https://www.elastic.co/guide/en/kibana/7.17/index-patterns.html",target:"_blank",rel:"noopener noreferrer"},ue=t("create a Kibana index pattern"),ge=t(" to be able to visualize the collected data."),fe=n(`<p>To make this process easier, we provide a script to automate this process and also load the default dashboards. To run the script, execute the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> <span class="token function">node</span> <span class="token function">npm</span> run load-dashboards
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),Se=t("After all containers started, you can open Kibana to check events and metrics by accessing "),be={href:"http://localhost:5601/app/dashboards",target:"_blank",rel:"noopener noreferrer"},me=t("http://localhost:5601/app/dashboards"),Ee=t("."),xe=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Kibana server take some minutes to boot, so don't panic if you try to access the Kibana URL and nothing shows up.")],-1),ye=t("If you started Kibanalytics with EXPRESS_PUBLIC_FOLDER=1 and EXPRESS_PORT=3000, you can also access "),ve={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},Re=t("http://localhost:3000"),Ie=t(" to interact with some example pages to generate events."),ke=e("h2",{id:"advanced-configurations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#advanced-configurations","aria-hidden":"true"},"#"),t(" Advanced Configurations")],-1),Te=e("p",null,`It's possible to provide some aditional advanced configurations to Kibanalytics engine gears by editing the corresponding files in "/.config" folder.`,-1),we=e("h3",{id:"redis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis","aria-hidden":"true"},"#"),t(" Redis")],-1),Ae=t('To provide aditional settings to the local Redis instance, edit ".config/redis/redis.conf" file. For more information about the available setting options, please check '),Oe={href:"https://redis.io/docs/manual/config",target:"_blank",rel:"noopener noreferrer"},Ce=t("Redis configuration"),Ne=t(" docs."),Le=e("h3",{id:"twemproxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#twemproxy","aria-hidden":"true"},"#"),t(" Twemproxy")],-1),De=t('To provide aditional settings to the local Twemproxy instance, edit ".config/twemproxy/twemproxy.yml" file. For more information about the available setting options, please check '),Pe={href:"https://github.com/twitter/twemproxy",target:"_blank",rel:"noopener noreferrer"},Ue=t("Twemproxy Configuration"),Xe=t(" docs."),Ke=e("h3",{id:"logstash",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#logstash","aria-hidden":"true"},"#"),t(" Logstash")],-1),He=t('To provide aditional settings to the local Logstash instance, edit ".config/logstash/logstash.yml" file. For more information about the available setting options, please check '),Ve={href:"https://www.elastic.co/guide/en/logstash/current/logstash-settings-file.html",target:"_blank",rel:"noopener noreferrer"},qe=t("Logstash Configuration"),Ge=t(" docs."),Me=t(`Also, it's possible to edit que main Logstash pipeline by editing ".config/logstash/pipeline/tracker.conf" file. For more information about pipeline settings, please check `),Fe={href:"https://www.elastic.co/guide/en/logstash/current/configuration.html",target:"_blank",rel:"noopener noreferrer"},je=t("Configuring Logstash"),Be=t(" docs."),We=e("h3",{id:"kibana",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kibana","aria-hidden":"true"},"#"),t(" Kibana")],-1),ze=t('To provide aditional settings to the local Kibana instance, edit ".config/kibana/kibana.yml" file. For more information about the available setting options, please check '),Ye={href:"https://www.elastic.co/guide/en/kibana/current/settings.html",target:"_blank",rel:"noopener noreferrer"},Ze=t("Configure Kibana"),Je=t(" docs.");function Qe($e,et){const s=r("ExternalLinkIcon");return o(),d(l,null,[h,p,e("p",null,[_,e("a",u,[g,a(s)]),f,e("a",S,[b,a(s)]),m]),E,e("p",null,[e("a",x,[y,a(s)]),v]),R,e("p",null,[I,e("a",k,[T,a(s)]),w]),A,O,C,N,L,e("p",null,[D,e("a",P,[U,a(s)]),X]),K,H,V,q,G,e("p",null,[M,e("a",F,[j,a(s)]),B]),W,e("p",null,[z,e("a",Y,[Z,a(s)]),J]),Q,e("p",null,[e("a",$,[ee,a(s)]),te]),se,e("p",null,[e("a",ae,[ne,a(s)]),ie]),re,e("p",null,[e("a",oe,[de,a(s)])]),e("p",null,[e("a",le,[ce,a(s)])]),he,e("p",null,[pe,e("a",_e,[ue,a(s)]),ge]),fe,e("p",null,[Se,e("a",be,[me,a(s)]),Ee]),xe,e("p",null,[ye,e("a",ve,[Re,a(s)]),Ie]),ke,Te,we,e("p",null,[Ae,e("a",Oe,[Ce,a(s)]),Ne]),Le,e("p",null,[De,e("a",Pe,[Ue,a(s)]),Xe]),Ke,e("p",null,[He,e("a",Ve,[qe,a(s)]),Ge]),e("p",null,[Me,e("a",Fe,[je,a(s)]),Be]),We,e("p",null,[ze,e("a",Ye,[Ze,a(s)]),Je])],64)}var st=i(c,[["render",Qe],["__file","index.html.vue"]]);export{st as default};
