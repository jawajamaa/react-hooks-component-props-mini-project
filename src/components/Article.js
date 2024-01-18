function Article( {title, date = "January 1, 1970", preview, minutes} ) {

    return (
        <article>
            <h3> { title } </h3>
            <small> { date } </small>
            <p>{ preview }</p>
        </article>
    )
}

// const MinutesToRead = minutes => {
//     minutes < 30 ? LessThan30 : GreaterThan30;
// }

// function LessThan30(minutes) {
//     math.ceil(minutes / 5) 
// }

// function GreaterThan30(minutes) {

// }


export default Article;
