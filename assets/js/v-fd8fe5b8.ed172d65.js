"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[5208],{2934:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-fd8fe5b8",path:"/languages/go.html",title:"Go",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Supported language servers",slug:"supported-language-servers",children:[]},{level:2,title:"Supported formatters",slug:"supported-formatters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]},{level:2,title:"Debugger",slug:"debugger",children:[]}],filePathRelative:"languages/go.md",git:{updatedTime:163680588e4,contributors:[{name:"nzlov",email:"wfhtqp@gmail.com",commits:3},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:2},{name:"Eric Leijonmarck",email:"eric.leijonmarck@gmail.com",commits:1},{name:"José Miguel Ochoa",email:"josemiguelo.ochoa@gmail.com",commits:1}]}}},1042:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.uE)('<h1 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall gopls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>go <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;gopls&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>go <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;gofmt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gofumpt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goimports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;golines&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>NlspConfig gopls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Configure <code>json</code> to use auto-completion</p><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall go_delve\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Using delve directly:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/go.lua</span>\n<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>\ndap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;go_delve&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',14),e=(0,p.Uk)("Using the "),o={href:"https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation#go",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("vscode-go debug adapter"),c=(0,p.Uk)(":"),u=(0,p.uE)('<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> dap <span class="token operator">=</span> require <span class="token string">&quot;dap&quot;</span>\ndap<span class="token punctuation">.</span>adapters<span class="token punctuation">.</span>go <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type <span class="token operator">=</span> <span class="token string">&#39;executable&#39;</span><span class="token punctuation">;</span>\n  command <span class="token operator">=</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">;</span>\n  args <span class="token operator">=</span> <span class="token punctuation">{</span>os<span class="token punctuation">.</span><span class="token function">getenv</span><span class="token punctuation">(</span><span class="token string">&#39;HOME&#39;</span><span class="token punctuation">)</span> <span class="token operator">..</span> <span class="token string">&#39;/vscode-go/dist/debugAdapter.js&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">-- specify the path to the adapter</span>\n<span class="token punctuation">}</span>\ndap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>go <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>\n    name <span class="token operator">=</span> <span class="token string">&quot;Attach&quot;</span><span class="token punctuation">,</span>\n    request <span class="token operator">=</span> <span class="token string">&quot;attach&quot;</span><span class="token punctuation">,</span>\n    processId <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;dap.utils&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>pick_process<span class="token punctuation">,</span>\n    program <span class="token operator">=</span> <span class="token string">&quot;${workspaceFolder}&quot;</span><span class="token punctuation">,</span>\n    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>\n    name <span class="token operator">=</span> <span class="token string">&quot;Debug curr file&quot;</span><span class="token punctuation">,</span>\n    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>\n    program <span class="token operator">=</span> <span class="token string">&quot;${file}&quot;</span><span class="token punctuation">,</span>\n    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>\n    name <span class="token operator">=</span> <span class="token string">&quot;Debug&quot;</span><span class="token punctuation">,</span>\n    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>\n    program <span class="token operator">=</span> <span class="token string">&quot;${workspaceFolder}&quot;</span><span class="token punctuation">,</span>\n    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>\n    name <span class="token operator">=</span> <span class="token string">&quot;Debug curr test&quot;</span><span class="token punctuation">,</span>\n    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>\n    mode <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>\n    program <span class="token operator">=</span> <span class="token string">&quot;${file}&quot;</span><span class="token punctuation">,</span>\n    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type <span class="token operator">=</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>\n    name <span class="token operator">=</span> <span class="token string">&quot;Debug test&quot;</span><span class="token punctuation">,</span>\n    request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>\n    mode <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>\n    program <span class="token operator">=</span> <span class="token string">&quot;${workspaceFolder}&quot;</span><span class="token punctuation">,</span>\n    dlvToolPath <span class="token operator">=</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function">exepath</span><span class="token punctuation">(</span><span class="token string">&#39;dlv&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>',1),r={},i=(0,a(3744).Z)(r,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[e,(0,p._)("a",o,[l,(0,p.Wm)(a)]),c]),u],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);