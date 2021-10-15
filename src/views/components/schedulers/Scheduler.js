import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ViewState, GroupingState, IntegratedGrouping, IntegratedEditing, EditingState,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  GroupingPanel,
  DayView,
  ViewSwitcher,
  Toolbar,
  WeekView,
  DragDropProvider,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  teal, indigo,
} from '@material-ui/core/colors';

const appointments = [{
  id: 0,
  title: 'Watercolor Landscape',
  members: [1, 2],
  roomId: 1,
  startDate: new Date(2017, 4, 28, 9, 30),
  endDate: new Date(2017, 4, 28, 12, 0),
}, {
  id: 1,
  title: 'Oil Painting for Beginners',
  members: [1],
  roomId: 2,
  startDate: new Date(2017, 4, 28, 12, 30),
  endDate: new Date(2017, 4, 28, 14, 30),
}, {
  id: 2,
  title: 'Testing',
  members: [1, 2],
  roomId: 1,
  startDate: new Date(2017, 4, 29, 12, 30),
  endDate: new Date(2017, 4, 29, 14, 30),
}, {
  id: 3,
  title: 'Final exams',
  members: [1, 2],
  roomId: 2,
  startDate: new Date(2017, 4, 29, 9, 30),
  endDate: new Date(2017, 4, 29, 12, 0),
}];

const owners = [{
  text: 'Andrew Glover',
  id: 1,
  color: indigo,
}, {
  text: 'Arnie Schwartz',
  id: 2,
  color: teal,
}];

const locations = [
  { text: 'Cubículo 1', id: 1 },
  { text: 'Cubículo 2', id: 2 },
  { text: 'Cubículo 3', id: 3 },
  { text: 'Cubículo 4', id: 4 },
  { text: 'Cubículo 5', id: 5 },
  { text: 'Cubículo 6', id: 6 },
  { text: 'Cubículo 7', id: 7 },
  { text: 'Cubículo 8', id: 8 },
  { text: 'Cubículo 9', id: 9 },
  { text: 'Cubículo 10', id: 10 },
  { text: 'Cubículo 11', id: 11 },
  { text: 'Cubículo 12', id: 12 },
  { text: 'Sala de Video', id: 13 },
  { text: 'Sala de Grabación', id: 14 },
];
const locations2 = [
  { text: 'Cubículo 20', id: 1 },
];

export default class Calendario extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [{
        fieldName: 'roomId',
        title: 'Location',
        instances: locations,
      }],
      grouping: [{
        resourceName: 'roomId',
      }],
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, resources, grouping } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2017-05-28"
            defaultCurrentViewName="Week"
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <GroupingState
            grouping={grouping}
          />

          <DayView
            startDayHour={9}
            endDayHour={15}
            intervalCount={1}
          />

          <WeekView
            startDayHour={9}
            endDayHour={15}
            intervalCount={1}
          />
          <Appointments />
          <Resources
            data={resources}
          />

          <IntegratedGrouping />
          <IntegratedEditing />
          <Toolbar />
          <ViewSwitcher />
          <AppointmentTooltip showOpenButton />
          <AppointmentForm />
          <GroupingPanel />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
