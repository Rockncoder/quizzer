"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var quiz_service_1 = require('./quiz-service');
var Seek_1 = require('./Seek');
var router_1 = require('@angular/router');
//
//
var Position = (function () {
    function Position(maxPosition) {
        this.total = maxPosition || 0;
        this.index = 0;
    }
    Position.prototype.setMax = function (maxPosition) {
        this.total = maxPosition;
    };
    Position.prototype.seek = function (direction) {
        switch (direction) {
            case Seek_1.Seek.Forward:
                if (this.index < this.total) {
                    this.index += 1;
                }
                break;
            case Seek_1.Seek.Backward:
                if (this.index) {
                    this.index -= 1;
                }
                break;
            case Seek_1.Seek.Beginning:
                this.index = 0;
                break;
        }
    };
    Position.prototype.getPosition = function () {
        return this.index;
    };
    Position.prototype.getTotal = function () {
        return this.total;
    };
    return Position;
}());
var PlayerComponent = (function () {
    function PlayerComponent(_quizService, route) {
        var _this = this;
        this._quizService = _quizService;
        this.route = route;
        this.index = 0;
        this.title = "";
        this.tagLine = "";
        this.current = {
            question: "",
            choices: []
        };
        this.total = 0;
        this.answers = [];
        this.responses = [];
        this.right = 0;
        this.showAnswers = false;
        this.previous = function () { return _this.seekToQuestion(Seek_1.Seek.Backward); };
        this.next = function () { return _this.seekToQuestion(Seek_1.Seek.Forward); };
        this.score = function () {
            _this.seekToQuestion(Seek_1.Seek.Score);
            _this.right = _this.tabulate(_this.questions.quiz.questions, _this.answers);
            _this.showAnswers = true;
            _this.seekToQuestion(Seek_1.Seek.Beginning);
        };
        this.position = new Position();
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.getQuiz();
    };
    PlayerComponent.prototype.getQuiz = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            debugger;
            _this._quizService.getQuiz(id).then(function (data) {
                debugger;
                _this.questions = data;
                _this.title = data.title;
                _this.tagLine = data.tagLine;
                _this.current = data.quiz.questions[0];
                _this.total = data.quiz.questions.length;
                _this.position.setMax(_this.total);
                _this.position.seek(Seek_1.Seek.Beginning);
                _this.seekToQuestion(Seek_1.Seek.Beginning);
            }, function (error) {
                console.log("Error: " + error);
            });
        });
    };
    PlayerComponent.prototype.seekToQuestion = function (direction) {
        if (direction !== Seek_1.Seek.Beginning) {
            this.answers[this.position.getPosition()] = this.getPlayerResponses(this.responses, this.current.choices);
        }
        this.position.seek(direction);
        var pos = this.position.getPosition();
        this.current = this.questions.quiz.questions[pos];
        this.responses = (this.answers[pos]) ? this.answers[pos] : [];
        this.index = pos;
    };
    PlayerComponent.prototype.getPlayerResponses = function (responses, question) {
        var ndx;
        var newResponses = question.map(function () { return false; });
        for (ndx = 0; ndx < responses.length; ndx += 1) {
            if (responses[ndx]) {
                newResponses[ndx] = true;
            }
        }
        return newResponses;
    };
    PlayerComponent.prototype.tabulate = function (questions, answers) {
        return questions.reduce(function (previousScore, currentQuestion, index) {
            var question = currentQuestion.choices.map(function (choice) { return !!choice.isAnswer; });
            var answer = answers[index];
            var points = (answer && question.every(function (val, index) { return val === answer[index]; }) ? 1 : 0);
            return previousScore + points;
        }, 0);
    };
    PlayerComponent = __decorate([
        core_1.Component({
            selector: 'player',
            templateUrl: './player.component.html'
        }), 
        __metadata('design:paramtypes', [quiz_service_1.QuizService, router_1.ActivatedRoute])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map