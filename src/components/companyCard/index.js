import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, Button, Loader } from 'semantic-ui-react';
import { getCompany } from '../../store/actions/company';

const extra = (
    <Button basic>
        Edit
    </Button>
);

const description = (company) => {
    return (
        <div>
            <p>
                Type: {company.type}
            </p>
            <p>
                CEO: {company.ceo}
            </p>
            <p>
                Accountant: {company.accountant}
            </p>
            <p>
                Address: {company.address}
            </p>
            <p>
                Phone: {company.phone}
            </p>
        </div>
    )
}

class CompanyCard extends Component {
    
    componentDidMount() {
        const { user } = this.props.user;
        this.props.getCompany(user);
    }
    
    render() {
        const { company } = this.props;
        if (!company) {
            return <Loader active inline='centered' />
        }

        return (
            <Card
                header={company.companyName}
                meta={company.inn}
                description={() => description(company)}
                extra={extra}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      company: state.company,
    };
};
  
const mapDispatchToProps = { getCompany };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompanyCard);
