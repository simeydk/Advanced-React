import React, { Component } from 'react';
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled from 'styled-components'

const MyButton = styled.button`
    color: red;
`

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton>Click me</MyButton>
                {this.props.children}
            </div>
        );
    }
}

export default Page;