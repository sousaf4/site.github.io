const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig){
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };
    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
	  	preAttributes: { tabindex: 0 }
	  });
	  eleventyConfig.addPlugin(pluginWebc, {
      components: "src/includes/components/**/*.webc"
    });
	  eleventyConfig.addPlugin(pluginNavigation);

    // Filters 
    eleventyConfig.addFilter('formatdata', (data) => {
      return data.toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'})
    });

    // Return all the tags used in a collection
	  eleventyConfig.addFilter("getAllTags", collection => {
	  	let tagSet = new Set();
	  	for(let item of collection) {
	  		(item.data.tags || []).forEach(tag => tagSet.add(tag));
	  	}
	  	return Array.from(tagSet);
	  });

    eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
      return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    });

    //Shortcode
    eleventyConfig.addShortcode('figure', function(path, description) {
      return `<figure class="h-entry"><img class="u-photo" src="/midias/imagens/${path}" alt="${description}">
      <figcaption  class="p-content">${description}</figcaption>
      </figure>`
    });

    eleventyConfig.addPassthroughCopy('src/midias/');
            
    eleventyConfig.addCollection("todas", collection => {
      const tagsSet = new Set();
      collection.getAll().forEach(item => {
        if (!item.data.tags) return;
        item.data.tags
          .filter(tag => !['aulas', 'all'].includes(tag))
          .forEach(tag => tagsSet.add(tag));
      });
      return Array.from(tagsSet).sort();
    });
  
    return {
      passthroughFileCopy:true,
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      templateFormats: ['md','njk','css','js','jpg','svg','png','webp','avif','html','webc','gpg'],
      
      dir: {
        includes:'includes',
        layouts:'layouts',
        data:'data',
        input:'src',
        output:'docs'
      },
      pathPrefix: "/",
    }
  }
