#!/usr/bin/env node

const fs = require("fs");
const marked = require("marked"); // markedパッケージを読み込む

const filePath = './resources/doc/api.md';

fs.readFile(filePath, "utf8", (err, file) => {
  if (err) {
    console.error(err);
    process.exit(err.code);
    return;
  }


  var renderer = new marked.Renderer();
  
  var title = '';
  var nav_html = '';
  renderer.heading = function (text, level, raw) {
    if ( level == 1 ) {
      title = text;
      return '';
    }
    else if (level == 2) { 
      let val = text.replace(/\/|\{|\}/g, '');

      nav_html += `<li id="${val}"><a href="#${text}">${text}</a></li>\n`;
    }
    
    return `<h${level} id="${text}">${text}</h${level}>\n`
  }

  renderer.html = function (html) {
    if (html.indexOf("<index>") != -1) {
      return html.replace('<index>', '<div class="index">');
    }
    if (html.indexOf("</index>") != -1) {
      return html.replace('</index>', '</div>');
    }
    if (html.indexOf("<source>") != -1) {
      return html.replace('<source>', '<div class="source">');
    }
    if (html.indexOf("</source>") != -1) {
      return html.replace('</source>', '</div>');
    }
    return;
  };


  renderer.list = function (body, ordered, start) {
    if (body.indexOf("<li>GET</li>") != -1) {
      return '<ul>' + body.replace('<li>GET</li>', '<li class="get">GET</li>') + '</ul>';
    }
    if (body.indexOf("<li>POST</li>") != -1) {
      return '<ul>' + body.replace('<li>POST</li>', '<li class="post">POST</li>') + '</ul>';
    }
    
    return '<ul>' + body + '</ul>';
  };
  
  renderer.table = function (header, body) {
    return '<div class="table_block"><table><thead>' + header + '</thead><tbody>' + body + '</tbody></table></div>';
  };

  const html = marked(file, { renderer: renderer }); // HTML文字列に変換する
  // console.log(html);

  fs.writeFileSync("resources/html/tmp/markdown.ejs", html)
  fs.writeFileSync("resources/html/tmp/title.ejs", title)
  fs.writeFileSync("resources/html/tmp/nav.ejs", nav_html)
});