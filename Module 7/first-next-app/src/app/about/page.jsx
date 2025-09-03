import Link from 'next/link'
import styles from '../page.module.css'

// Save as page.jsx in app/about

// export default function About() {
// return (
// <main className={styles.main}>
// <div className="About">
// <h1>About</h1>
// <p>This is the about page.
// Nothing to see, go <Link
// href="/">home</Link>.</p>
// </div>
// </main>
// )
// }

// Updated page.jsx: <main> layout structure moved to

export default function about() {
return (
<div className="about">
<h1>About</h1>
<p>This is the about page.
Nothing to see, go <Link
href="/">home</Link>.</p>
</div>
)
}

// Check http://localhost:3000/about to see it in action