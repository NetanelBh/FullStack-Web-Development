import styles from './editSubscription.module.css';

import { useLocation } from 'react-router-dom';

const EditSubscription = () => {
  const location = useLocation();

  // Get the clicked member id from the state that sent via navLink from movieSubscription component
  const subscriptionId = location.state;

  return (
    <div>EditSubscription</div>
  )
}

export default EditSubscription