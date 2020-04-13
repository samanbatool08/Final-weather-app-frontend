import React from 'react';

class ActivityItem extends React.Component {

    state = {
        saved: false
    }

    mergeClickFunctions = (activity) => {
        this.props.addActivity(activity);
        this.setState({saved: true})
        console.log(this.state.saved, 'in function')
    }

    render() {
        console.log(this.state.saved, 'outside function')
        return (
            <div>
                <h3 style={{color: '#f16051', textAlign: 'center'}}>{this.props.activity.name}</h3>
                <p style={{color: '#fff', textAlign: 'center'}}>Address: {this.props.activity.vicinity}</p>
                {this.props.activity.opening_hours ? this.props.activity.opening_hours.open_now && <p style={{color: '#fff', textAlign: 'center'}}>Open: Yes</p> : <p style={{color: '#fff', textAlign: 'center'}}>Open: Information not available</p>}
                {this.props.activity.photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.activity.photos[0].photo_reference}&key=AIzaSyBeZSj15N3z9iD0tqyGFcxTqiUW8HqfeZk`} style={{height: '263px', width: '400px'}}/> : <p style={{color: '#fff', textAlign: 'center'}}>no photo available</p>}
                <br />
                <div className="customAlign">
                {this.state.saved ? <button style={{padding: '4px 5px', backgroundColor: 'green'}} onClick={() => this.mergeClickFunctions(this.props.activity)}>Saved</button> : <button style={{padding: '4px 5px'}} onClick={() => this.mergeClickFunctions(this.props.activity)}>✓ Save Activity</button>}

            </div>            
            </div>
        )
    }
}

export default ActivityItem; 