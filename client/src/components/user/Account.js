import { Card } from 'semantic-ui-react';
import { UserConsumer } from '../../providers/UserProvider';
import Moment from 'react-moment';

const Account = () => (
  <UserConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.username}</Card.Header>
          <Card.Meta>
            Date Joined: 
            <Moment format="MM/DD/YYYY">
              {value.created_at}
            </Moment>
          </Card.Meta>
          <Card.Description>
            Membership Level: {value.membership}
          </Card.Description>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
)

export default Account;