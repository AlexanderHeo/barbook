import Link from 'next/link';
import styles from './categoryList.module.css';

export default function List({ title, children }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {children.map((tile) => {
          const type = tile.type.toLowerCase();
          return (
            <Link href={`/list/${type}`} key={tile.id}>
              <div className={styles.button}>
                {type.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
