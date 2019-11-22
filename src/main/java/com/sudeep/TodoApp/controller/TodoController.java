package com.sudeep.TodoApp.controller;

import java.util.List;

import com.sudeep.TodoApp.model.Todo;
import com.sudeep.TodoApp.service.TodoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
    @Autowired
    TodoService todoService;

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String helloWorld() {
        return "hello";
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> todos(@PathVariable String username) {

        List<Todo> todos = todoService.findAll();
        return todos;

    }

}
