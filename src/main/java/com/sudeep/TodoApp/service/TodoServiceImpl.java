package com.sudeep.TodoApp.service;

import java.util.List;

import com.sudeep.TodoApp.model.Todo;
import com.sudeep.TodoApp.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    TodoRepository todoRepository;

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

}