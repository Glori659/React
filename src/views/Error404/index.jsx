import { useRouteError } from 'react-router-dom';

import style from './Error404.module.css'

const Error404 = () => {
    const error = useRouteError();

    console.log(error);
    return (
        <div className={style.container}>
            <h3 className={style.title}>{Error.status}Ops!</h3>
            <p className={style.dscription}>{error.data}No hemos encontrado tu ruta</p>
        </div>
    );
};

export default Error404;