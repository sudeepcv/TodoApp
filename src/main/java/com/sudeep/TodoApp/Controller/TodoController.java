package com.sudeep.TodoApp.Controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController{
    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String helloWorld(){
        return "hello";
    }

}

