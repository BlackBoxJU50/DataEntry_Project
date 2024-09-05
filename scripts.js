const employees = [
    { id: 1, Name: 'Hasib', Position: 'Manager', Depertment: 'Sell' },
    { id: 2, Name: 'Rahim', Position: 'Manager', Depertment: 'Sell' },
    { id: 3, Name: 'Karim', Position: 'Manager', Depertment: 'Sell' },
    { id: 4, Name: 'Hasib', Position: 'Manager', Depertment: 'Sell' }
  ];

  function createEmployeeRow(employee) {
    const idCell = document.createElement('td');
    idCell.innerText = employee.id;
    idCell.className = "px-4 py-2";

    const nameCell = document.createElement('td');
    nameCell.innerText = employee.Name;

    const positionCell = document.createElement('td');
    positionCell.innerText = employee.Position;

    const deptCell = document.createElement('td');
    deptCell.innerText = employee.Depertment;

    const employeeRow = document.createElement('tr');
    employeeRow.append(idCell, nameCell, positionCell, deptCell);

    return employeeRow;
  }

  function renderTable() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';
    employees.forEach(employee => {
      const employeeRow = createEmployeeRow(employee);
      tableBody.appendChild(employeeRow);
    });
  }

 
  renderTable();

  function addEmployeeFromForm() {
    const id = document.getElementById('empId').value;
    const name = document.getElementById('empName').value;
    const position = document.getElementById('empPosition').value;
    const department = document.getElementById('empDepartment').value;

    if (id && name && position && department) {
      const newEmployee = {
        id: parseInt(id),
        Name: name,
        Position: position,
        Depertment: department
      };

      employees.push(newEmployee);

      document.getElementById('empId').value = '';
      document.getElementById('empName').value = '';
      document.getElementById('empPosition').value = '';
      document.getElementById('empDepartment').value = '';

      renderTable();
    } else {
      alert('Please fill in all fields');
    }
  }