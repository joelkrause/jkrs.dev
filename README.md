# Raak Creative Gatsby Starter

## General
1. This starter is using styled-components so no need to create a stylesheet for each component
2. Page transitions are being done with `gatsby-plugin-transitions` inside the `layout.jsx` file located in `src/templates`
3. You don't need to add the graphql fragment inside the component template file because they're being passed into the component with `props`

## Using this starter
1. Make sure you edit `gatsby-config.js` and change the URL's to match your website. The site title and description are being pulled in from WordPress
2. Make sure the navigation names match what's in WordPress

## Adding a new component
1. Add GraphQL query to `page.jsx` like below:
```
... on WordPressAcf_ACF_FIELD_NAME {
    content
    image {
    localFile {
        childImageSharp {
                fluid {
                    srcSetWebp
                    srcWebp
                    srcSet
                }
            }
        }
    }
}
```
2. Add new component in the `modules` folder. Add the following:
This will match the data you added to the main page query. You will also need to add your imports etc. Also add it to the `page.jsx` file
```
const ACFModule = ({
  content,
  image
}) => (
  <section className="ACFModule">
    {(() => {
      if(image){
        return <Img fluid={image.localFile.childImageSharp.fluid} />
      }
    })()}
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
);

export default ACFModule;
```
3. Add a new `case` to the `switch` statement in page.jsx
```
case 'WordPressAcf_page_hero':
    return <ACFModule key={section.id} {...section} />;
```
4. Restart gatsby!