import React from 'react';
import PropTypes from 'prop-types';
import {fetchPopularRepos} from '../utils/api';

function LanguagesNav ({selected, onUpdateLanguage}){
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return(
  <ul className="flex-center">
          {languages.map((language)=>{
            return(
              <li key={language}>
                <button 
                className="btn-clear nav-link" 
                style={language === selected ? {color: 'rgb(187,46,31)'} : null}
                onClick={()=>onUpdateLanguage(language)}>
                  {language}
                </button>
              </li>
            );
          })}
        </ul>
  );
}

class Popular extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null,
    }


    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage){
    this.setState({
      selectedLanguage: selectedLanguage,
      error: null,
      repos: null,
    });

    fetchPopularRepos(selectedLanguage)
      .then((repos)=>this.setState({
        repos: repos,
        error: null,
      }))
      .catch(()=>{
        console.warn('Error fetching repos', error);
        this.setState({
          error: 'There was an error fetching the repositories.'
        })
      })
  }

  isLoading(){
    return this.state.repos === null & this.state.error === null;
  }


  render(){
    const {selectedLanguage, repos, error} = this.state;

    return(
      <React.Fragment>
        <LanguagesNav
          selected = {selectedLanguage}
          onUpdateLanguage = {this.updateLanguage}
        />
        {this.isLoading() ? <p>Loading...</p>:null}
        {error ? <p>{error}</p>: null}
        {repos ? <pre>{JSON.stringify(repos, null, 2)}</pre>: null}

      </React.Fragment>
    );
  }
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}


export default Popular;