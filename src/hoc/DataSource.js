import React, {Component} from 'react';
import {Query} from "react-apollo";
import gql from "graphql-tag"

import Loader from '../components/Loader/Loader'

const dataSubscription = (WrappedComponent, graphQuery) => {

    let tagged_query = gql `${graphQuery}`;
    /*   HOC decoupled from app components 
         a specific component  that wishes to subscribe to data is passed into this HOC as an argument ,along with specific graph query, and is wrapped with QUERY component 
         that communicates with GraphQL
         
         */

    class withDataSubscription extends Component {

        render() {

            return (
                <Query query={tagged_query}>
                    {({loading, error, data}) => {
                        if (loading) {
                            return <Loader/>
                        }

                        if (error) {
                            return <p>Error : {error}(</p>;
                        }

                        return <WrappedComponent data={data}/>;
                    }}
                </Query>
            )
        }
    }

    return withDataSubscription
}

export default dataSubscription;