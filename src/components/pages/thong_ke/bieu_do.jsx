
function Bieu_do() {
    return <>
        <div className='container-main'>
            <h2>Chart</h2>
            <iframe
                style={{
                    background: '#FFFFFF',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
                    width: '640px',
                    height: '480px',
                    margin: '0 20px 0 0'
                }}
                src="https://charts.mongodb.com/charts-project-0-jklpukw/embed/charts?id=66ba013f-64fb-43b3-8b69-2564cceee35d&maxDataAge=60&theme=light&autoRefresh=true&attribution=false"
                title="MongoDB Chart"
            ></iframe>
            <iframe
                style={{
                    background: '#FFFFFF',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
                    width: '640px',
                    height: '480px'
                }}
                src="https://charts.mongodb.com/charts-project-0-jklpukw/embed/charts?id=66ba0410-7578-4b4f-81d4-ec34683f36fe&maxDataAge=3600&theme=light&autoRefresh=true&attribution=false"
                title="MongoDB Chart"
            ></iframe>

        </div>
    </>
}

export default Bieu_do