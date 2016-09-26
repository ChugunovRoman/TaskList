// контейнер для задач
const TaskContainer = React.createClass({
    getInitialState: function(){
        return{
            dataList: [],
        };       
    },
    componentDidMount: function(){
        // запрашиваем json с сервера
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({dataList: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    changeHandler: function(value) {
        var array = this.state.dataList;
        // удаляем из масива объект с переданным id
        for(var key in array){
            if(array[key].id == value){
                array.splice(key, 1);
            }
        }
        // вызываем re-render парента
        this.setState({
            dataList: array
        });
        // отсылаем id завершенной задачи
        $.ajax({
            type: "POST",
            url: "server.php",
            data: {NumTask: value},
            success: function(){
                // действие в случае успешного выполнения запроса
                alert("Данные отправлены. (id: " + value + ")");
            },
            statusCode: {
                404: function(){
                    //alert("404. Файл не найден.");
                }
            } 
        });
    },
    render: function(){
        var taskTemplate, self = this;
        // если массив пуст, то выводим что задач нет
        if(this.state.dataList.length > 0){
            taskTemplate = this.state.dataList.map(function(item, index){
                return (
                    <div className="Part" key={index}>
                        <TaskPart data={item} onClick={self.changeHandler} />
                    </div>
                );
            });  		
        }
        else {
            return(
                <div className="noTasks">
                    <p>Задачи отсутствуют</p>
                </div>
            );    		
        }
        return(
            <div className="CountTask">
                <div className={'TaskContainer' + (this.state.dataList.length > 0 ? '' : ' none')}>
                    <h2>Task list</h2>
                </div>
                {taskTemplate}
                <div className={'TaskContainer' + (this.state.dataList.length > 0 ? '' : ' none')}>
                    <strong className={'taskCount' + (this.state.dataList.length > 0 ? '' : ' none')} >Task count: {this.state.dataList.length}</strong>
                </div>
            </div>
        );    	
    }
});

// объект для каждой задачи
const TaskPart = React.createClass({
	propTypes:{
        onClick: React.PropTypes.func,
        data: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function(){
        return{
            visible: true
        };
    },
    onShowDescClick: function(e){
        e.preventDefault();
        this.setState({
            visible: (this.state.visible) ? false : true
        });
    },
    changeHandler: function(e){
        if (typeof this.props.onClick === 'function') {
            this.setState({visible: true});
            this.props.onClick(e.target.value);
        }        
    },
    render: function(){
        return(
			<div className="TaskPart">
                <div className="NameOfTask" onClick={this.onShowDescClick} ><p>{this.props.data.name}</p></div>
                <div className={'descriptionBlock' + (this.state.visible ? ' none' : '')}><p className="descriptionText">{this.props.data.description}</p><button className="FinishBtn" value={this.props.data.id} onClick={this.changeHandler} >Завершить</button></div>
			</div>
		);
	}
 });

// рендерим наши объекты на странице
ReactDOM.render(
    <TaskContainer url='../tasks.json' />,
    document.getElementById("tasks")
);