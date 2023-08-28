import Link from 'next/link';

const StudentsList = () => {
  const names = [
    {
      name: 'Qazi',
      id: 1,
    },
    {
      name: 'Ahmad',
      id: 2,
    },
    {
      name: 'Khan',
      id: 3,
    },
    {
      name: 'Afridi',
      id: 4,
    },
  ];
  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {names.map((names) => (
          <li>
            <Link href={`/studentlist/${names.name}`}>{names.name}</Link>
          </li>
        ))}

        {/* <li>
          <Link href="/studentlist/1">Qazi</Link>
        </li>
        <li>
          <Link href="/studentlist/2">Ahmad</Link>
        </li>
        <li>
          <Link href="/studentlist/3">Khan</Link>
        </li>
        <li>
          <Link href="/studentlist/4">Afridi</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default StudentsList;
