import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button onClick={onClick} className={s.loadMore}>
    Load more
  </button>
);

export default LoadMoreBtn;