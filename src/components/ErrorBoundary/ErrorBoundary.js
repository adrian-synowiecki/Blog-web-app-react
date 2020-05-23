import React, { Component } from 'react';
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	static getDerivedStateFromError(error) {
		return {
			hasError: true
		};
	}
	render() {
		if (this.state.hasError) {
			return <h2>Some Error Spotted here!</h2>;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;




/* const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
  };
  
  class ErrorBoundary extends React.Component {
	state = { error: null, errorInfo: null };
  
	componentDidCatch(error, errorInfo) {
	  this.setState({
		error: error,
		errorInfo: errorInfo
	  });
	}
  
	render() {
	  if (this.state.errorInfo) {
		return (
		  <div>
			<h2>Something went wrong.</h2>
			<details style={{ whiteSpace: "pre-wrap" }}>
			  {this.state.error && this.state.error.toString()}
			  <br />
			  {this.state.errorInfo.componentStack}
			</details>
		  </div>
		);
	  }
  
	  return this.props.children;
	}
  }

  export default ErrorBoundary; */