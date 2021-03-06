import React, { Component } from 'react';
import { Header, Grid, List, Segment, Divider } from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react'
import  Carousel from 'nuka-carousel';
import {getServiceContainer} from '../utils/ServicesContainer';
import ForexChartContainer from './Charts/ForexChartContainer';
import TradeEquityChart    from './TradePortfolio/TradeEquityChart';


class Dashboard extends Component {

 constructor(props) {
            super(props);

            this.state = {
                activeTrades         : [],
                openActiveTrades     : [],
                trackingActiveTrades : []
            };

            this.histroyService = getServiceContainer().history;
            this.trackerService = getServiceContainer().tracker;
    }

    componentWillMount(){
           this.setState({
             activeTrades     :  this.trackerService.getTrades(),
           }, this.setTrades)
    } 

    setTrades(){
        this.setState({
            openActiveTrades: this.state.activeTrades.filter(t => t.status === "OPEN"),
            trackingActiveTrades: this.state.activeTrades.filter(t => t.status === "TRACKING")
        })
    }    
    render(){ 
        return (
               <Grid doubling columns={2} padded className = "padded-grid">
                    <Grid.Column  computer = {10} >
                           <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                             Focus  List
                           </Header>
                           <Card  fluid color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>EURUSD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>

                           <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                            Watch List
                           </Header>
                        <Carousel slidesToShow={1} >
                       
                         <Card  fluid color = "blue" className = "section-background" >
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>EURUSD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                        </Card>
                        <Card color = "blue" className = "section-background" onClick = {() => window.alert('hello fukcer')}>
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>babsdb 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>
                           <Card color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>USDCAD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>
                           <Card color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>GBPUSD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>

                     </Carousel>
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                             Overlay  List
                           </Header>
                            
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                            Open List
                           </Header>
                             
                     </Grid.Column>
                     <Grid.Column  computer = {6}>
                            <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                                Tracking
                            </Header>
                            <Segment.Group inverted size = 'large'>
                               {this.state.trackingActiveTrades.map(t  => {
                                   return <Segment inverted> {t.pair}</Segment>
                               })}
                            </Segment.Group>
                               <Header as='h1'  textAlign= 'center' attached='top' className="section-header">
                                Open
                            </Header>
                            <Segment.Group inverted size = 'large'>
                                {this.state.openActiveTrades.map(t  => {
                                   return <Segment inverted> {t.pair}</Segment>
                               })}
                            </Segment.Group>
                      </Grid.Column>
                       <Carousel>
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>

                         <Card color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>EURUSD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                        </Card>
                        <Card color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>babsdb 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>
                           <Card color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>USDCAD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>
                           <Card color = "blue" className = "section-background">
                                <Image src='http://monitorfx.com/wp-content/uploads/2016/08/Bar-chart-forex.png' />
                                <Card.Content>
                                <Card.Header>GBPUSD 15M</Card.Header>
                                <Card.Meta>Status: 123</Card.Meta>
                                <Card.Meta>QQ: Prop 2</Card.Meta>
                                <Card.Description>Description of Focus Chart</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Icon name='edit' />
                                   Edit
                                </a>
                                </Card.Content>
                           </Card>

                     </Carousel>
                </Grid>
            
         )    
    }
}

export default Dashboard;