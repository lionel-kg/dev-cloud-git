import React, { useContext } from 'react'
import { TasksContext } from '../../../utils/contexts/taskContext'
import CompletedTasks from '..'
import { render } from '@testing-library/react'

// test('todo test no render', ()=>{
    
//     const {asFragment} = render(<CompletedTasks />)
//     console.log("asFragment", asFragment())
//     expect(asFragment()).toMatchSnapshot()
// })

test('CompletedTasks ne rend rien en l\'absence de tâches terminées', () => {
    // Simule un contexte avec des tâches vides (aucune tâche terminée).
    const mockCompletedTasksContext = {
        tasks: [],
    };
    // Rend le composant CompletedTasks avec le contexte simulé.
    const { container } = render(
      <TasksContext.Provider value={mockCompletedTasksContext}>
        <CompletedTasks />
      </TasksContext.Provider>
    );
  
    // Vérifie que le composant n'affiche rien en l'absence de tâches terminées.
    expect(container.firstChild).toMatchSnapshot();
  });

  test('CompletedTasks renders completed tasks', () => {
    // Créez un contexte avec des tâches terminées.
    const mockCompletedTasksContext = {
        tasks: [
            { id: 1, text: 'Task 1', completed: true },
            { id: 2, text: 'Task 2', completed: true },
        ],
    };

    // Rend le composant CompletedTasks avec le contexte simulé.
    const { getByText } = render(
        <TasksContext.Provider value={mockCompletedTasksContext}>
            <CompletedTasks />
        </TasksContext.Provider>
    );
    // Vérifie que les tâches terminées sont rendues dans le composant CompletedTasks.
    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
});

test('CompletedTasks does not render uncompleted tasks', () => {
    // Simule un contexte avec des tâches non terminées.
    const mockCompletedTasksContext = {
        tasks: [
            { id: 1, text: 'Task 1', completed: false },
            { id: 2, text: 'Task 2', completed: false },
        ],
    };

    // Rend le composant CompletedTasks avec le contexte simulé.
    const { container } = render(
        <TasksContext.Provider value={mockCompletedTasksContext}>
            <CompletedTasks />
        </TasksContext.Provider>
    );
    
    // Vérifie que le composant n'affiche rien en l'absence de tâches terminées.
    expect(container.firstChild).toMatchSnapshot();
});

test('CompletedTasks matches snapshot with no completed tasks', () => {
    // Simule un contexte avec des tâches vides (aucune tâche terminée).
    const mockCompletedTasksContext = {
        tasks: [],
    };

    // Rend le composant CompletedTasks avec le contexte simulé.
    const { container } = render(
        <TasksContext.Provider value={mockCompletedTasksContext}>
            <CompletedTasks />
        </TasksContext.Provider>
    );

    // Utilisez toMatchSnapshot pour vérifier que le rendu du composant correspond au snapshot précédemment enregistré.
    expect(container).toMatchSnapshot();
});