# NextJS


## Pages
Pages are any landing page, e.g. `/`, or `/store` etc

pages are creating a `path.js` file in the `pages` directory for the `path` that you want, e.g. create `about.js` for the `/about` page.

The default component exported from that page will be rendered at that route.

Also, `index.js` renders to the homepage route, i.e. `/`.

## Internal links:
instead of

```javascript
<a href="/store">go to store</a>
```

do

```javascript
import Link from 'next/link'
<Link href="/store"><a>go to store</a></Link>
```

## App

Next creates an `App` component by default and wraps your entire application in that.

you can create a custom `App` by creating `_app.js` in the pages directory. In that you have to do the following

```javascript
import App, {Container} from 'next/app'

class MyApp extends App {
    render() {
        const {Component} = this.props
        return (
            <Container>
                <p>"content that goes on every page"</p>
                <Component />
            </Container>
        )
    }
}

export default MyApp
```
the `page` mentioned above gets passed to the `App` as a `Component` prop, and gets rendered within the `Container` component where the `<Component />` is placed.

Other things placed in `<Container>` will render on every page. 

## Head

`NextJS` has a Head component which you can use to get stuff into the `head` tag of the page using React. 


# Styled Components