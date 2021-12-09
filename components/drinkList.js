import Link from 'next/link';
import styles from './drinkList.module.css';

export default function List({ children }) {
  return (
    <>
      <h3 className={styles.header}>{children.type}</h3>
      <div className={styles.wrapper}>
        {children.drinkList.map((drink) => {
          return (
            <button key={drink.id} className={styles.drinkButton}>
              <Link href={`/cocktails/${drink.name}`} cocktail={drink.name}>
                <p>{drink.name}</p>
              </Link>
            </button>
          );
        })}
      </div>
    </>
  );
}
