import React from "react";
import { connect } from "react-redux";

function Articles(props) {
  console.log(props.searchTerm);
  return (
    <div>
      <ul>
        {props.articles
          .filter((article) =>
            article.title.toLowerCase().includes(props.searchTerm.toLowerCase())
          )
          .map((item) => (
            <li key={item.id}>
              <a href={item.url}> {item.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

function Search(props) {
  const handleChange = (e) => {
    console.log(e);
    props.onSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

function App(props) {
  return (
    <div className="App">
      <h1>REDUX ARTICLE LIST SEARCH APP</h1>
      <Search onSearch={props.onSearch} />
      <Articles articles={props.articles} searchTerm={props.searchTerm} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});
const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchTerm) => dispatch({ type: "SEARCH_SET", searchTerm }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
