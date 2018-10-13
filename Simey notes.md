# NextJS


## Pages
Pages are any landing page, e.g. `/`, or `/store` etc

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
