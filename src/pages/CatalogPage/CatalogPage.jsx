import Header from '../../components/Header/Header';
import CampersList from '../../components/CampersList/CampersList';
import Filters from '../../components/Filters/Filters';
import css from './CatalogPage.module.css';

const Catalog = () => {
    return (
        <div>
            <Header />
            <div className={css.container}>
                <Filters />
                <CampersList/>
            </div>
        </div>
    )
}
export default Catalog;