import { FiPackage, FiShoppingCart, FiStar, FiUser } from 'react-icons/fi';
import StatCard from '../components/Dashboard/StatCard';
import Order from '../components/Dashboard/Order';

const Dashboard = () => {
    return (
		<div>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<StatCard icon={FiPackage} title="Total Products" value="245" />
				<StatCard icon={FiShoppingCart} title="Total Orders" value="245" />
				<StatCard icon={FiUser} title="Total User" value="245" />
				<StatCard icon={FiStar} title="Agerave Rating" value="4.8" />
			</div>

			<Order />
		</div>
	);
};

export default Dashboard;