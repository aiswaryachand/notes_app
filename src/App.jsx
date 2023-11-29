import Home from './components/Home';
import Sidebar from './components/Sidebar';
import NotesContext from './Context/NotesContext';
import DataContext from './Context/DataContext';

function App() {
	return (
		<div className='flex gap-5 '>
			<Sidebar />
			<NotesContext>
				<DataContext>
					<Home />
				</DataContext>
			</NotesContext>
		</div>
	);
}

export default App;