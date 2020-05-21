import React from 'react';


class Canvas extends React.Component {

    constructor(props){
        super(props)
        this.canvasRef = React.createRef()
        this.state = {
            currCanvasMousePos: {x: 0, y: 0},
            prevCanvasMousePos: {x: 0, y: 0},
            lineWidth: 5,
            lineCap: 'round'
        }
        this.draw = this.draw.bind(this);
        this.dot = this.dot.bind(this);
        this.setCanvasMousePosition = this.setCanvasMousePosition.bind(this);
        this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount(){
        this.canvas = this.canvasRef.current;
        if(this.props.setCanvasReference){
            this.props.setCanvasReference(this.canvasRef);
        }
        this.canvasRect = this.canvas.getBoundingClientRect()
        this.ctx = this.canvas.getContext("2d")
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('mousemove', this.setCanvasMousePosition)
    }

    render () {
        const {height, width} = this.props
        return(
                <canvas width={width ? width : 640} height={height ? height : 360} onMouseDown={this.dot} ref={this.canvasRef} className="border"/>
        )
    }

    handleResize(){
        this.canvasRect = this.canvas.getBoundingClientRect()
    }

    setCanvasMousePosition(e){
        this.setState({prevCanvasMousePos: this.state.currCanvasMousePos})
        let tempMouse = {};
        tempMouse.x = e.clientX - this.canvasRect.left;
        tempMouse.y = e.clientY - this.canvasRect.top;
        this.setState({currCanvasMousePos: tempMouse})
        if(e.buttons === 1){
            this.draw()
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.lineCap = this.state.lineCap;
        this.ctx.moveTo(this.state.prevCanvasMousePos.x, this.state.prevCanvasMousePos.y);
        this.ctx.lineTo(this.state.currCanvasMousePos.x, this.state.currCanvasMousePos.y);
        this.ctx.lineWidth = this.state.lineWidth;
        this.ctx.stroke();
    }

    dot() {
        this.ctx.beginPath();
        this.ctx.arc(this.state.currCanvasMousePos.x, this.state.currCanvasMousePos.y, (this.state.lineWidth / 2), 0, 2 * Math.PI)
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.lineCap = this.state.lineCap;
    }
}

export default Canvas;