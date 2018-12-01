import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
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
                Тип підприємства: {company.type}
            </p>
            <p>
                Керівник: {company.ceo}
            </p>
            <p>
                Бухгалтел: {company.accountant}
            </p>
            <p>
                Адреса: {company.address}
            </p>
            <p>
                Телефон: {company.phone}
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
        } else if (Array.isArray(company) && !company.length) {
            return <Link to="/company/create">
                <Button basic color="green">Створити нове підприємство</Button>
            </Link>
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
