import styles from '../page.module.css'
//save as app/posts/layout.jsx
export default function PageLayout({ children }) {
// Supports nested structures via the children prop
return (
<main className={styles.main}>
{children}
</main>
)
}

