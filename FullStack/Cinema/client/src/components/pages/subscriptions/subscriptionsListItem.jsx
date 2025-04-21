import styles from './subscriptionsListItem.module.css';

const SubscriptionsListItem = ({subscription}) => {
    
  return (
    <li>{subscription._id}</li>
  )
}

export default SubscriptionsListItem