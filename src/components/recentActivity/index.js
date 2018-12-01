import React, { Component } from 'react';
import { Card, Feed } from 'semantic-ui-react'

export default class RecentActivity extends Component {
    render() {
        return (
            <Card>
                <Card.Content>
                <Card.Header>Події</Card.Header>
                </Card.Content>
                <Card.Content>
                <Feed>
                    <Feed.Event>
                    <Feed.Content>
                        <Feed.Date content='1 day ago' />
                        <Feed.Summary>
                        Ви додали <a>Jenny Hess</a> як Вашого <a>бухгалтера</a>.
                        </Feed.Summary>
                    </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                    <Feed.Content>
                        <Feed.Date content='3 days ago' />
                        <Feed.Summary>
                        You створили договір з <a>Компанія "Якась"</a>.
                        </Feed.Summary>
                    </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                    <Feed.Content>
                        <Feed.Date content='4 days ago' />
                        <Feed.Summary>
                        Ви додали акт виконаних робіл <a>ТОВ "Підприємство"</a> № 32 від 10.12.2018р.
                        </Feed.Summary>
                    </Feed.Content>
                    </Feed.Event>
                </Feed>
                </Card.Content>
            </Card>
        )
    }
}
