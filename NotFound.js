const NotFound = ({onNotFound}) => {
    <div>
        <h1>No results :(</h1>
        <input type='btn' defaultValue='Вернутся на главную страницу' onClick={() => onNotFound()} />
    </div>
}

export default NotFound;