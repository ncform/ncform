/// <reference types="Cypress" />

import common from './common';

context('input', () => {
  before(() => {
    cy.visit('http://localhost:3004/examples/components/playground/index.html');
  });

  it('Basic', () => {
    let formSchema = {
      type: 'object',
      properties: {
        // has init value
        name0: {
          type: 'string',
          value: 'daniel'
        },
        name1: {
          type: 'string',
          ui: {
            disabled: true
          }
        },
        name2: {
          type: 'string',
          ui: {
            readonly: true
          }
        },
        name3: {
          type: 'string',
          ui: {
            hidden: true
          }
        },
        name4: {
          type: 'string',
          ui: {
            placeholder: 'your name'
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();
    // common.submitForm();

    cy.get('.previewArea').within(() => {
      cy.get('label')
        .contains('name0')
        .as('nameLabel0');
      cy.get('@nameLabel0')
        .next()
        .find('input')
        .as('nameInput0');
      cy.get('@nameInput0').should('have.value', 'daniel');

      cy.get('label')
        .contains('name1')
        .as('nameLabel1');
      cy.get('@nameLabel1')
        .next()
        .find('input')
        .as('nameInput1');
      cy.get('@nameInput1').should('be.disabled');

      cy.get('label')
        .contains('name2')
        .as('nameLabel2');
      cy.get('@nameLabel2')
        .next()
        .find('input')
        .as('nameInput2');
      cy.get('@nameInput2').should('have.prop', 'readonly');

      cy.get('label')
        .contains('name3')
        .as('nameLabel3');
      cy.get('@nameLabel3')
        .next()
        .find('input')
        .as('nameInput3');
      cy.get('@nameInput3').should('not.be.visible');

      cy.get('label')
        .contains('name4')
        .as('nameLabel4');
      cy.get('@nameLabel4')
        .next()
        .find('input')
        .as('nameInput4');
      cy.get('@nameInput4').should('have.prop', 'placeholder', 'your name');
    });
  });

  it('Simple Props', () => {
    let formSchema = {
      type: 'object',
      properties: {
        // has init value
        name1: {
          type: 'string',
          ui: {
            widgetConfig: {
              prefixIcon: 'el-icon-search',
              trim: true
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            widgetConfig: {
              suffixIcon: 'el-icon-date',
              clearable: true
            }
          }
        },
        name3: {
          type: 'string',
          ui: {
            widgetConfig: {
              prefixIcon: 'el-icon-search',
              suffixIcon: 'el-icon-date'
            }
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();
    // common.submitForm();

    cy.get('.previewArea').within(() => {
      cy.get('label')
        .contains('name1')
        .as('nameLabel1');
      cy.get('@nameLabel1')
        .next()
        .find('input')
        .as('nameInput1');
      cy.get('@nameInput1')
        .type(' daniel  ')
        .should('have.value', 'daniel');
      cy.get('@nameInput1')
        .parent()
        .find('.el-icon-search')
        .should('exist');
      cy.get('@nameInput1')
        .parent()
        .find('.el-input__clear')
        .should('not.be.visible');

      cy.get('label')
        .contains('name2')
        .as('nameLabel2');
      cy.get('@nameLabel2')
        .next()
        .find('input')
        .as('nameInput2');
      cy.get('@nameInput2')
        .parent()
        .find('.el-input__clear')
        .should('not.be.visible');
      cy.get('@nameInput2')
        .type(' daniel  ')
        .should('have.value', ' daniel  ');
      cy.get('@nameInput2')
        .parent()
        .find('.el-input__clear')
        .should('be.visible');
      cy.get('@nameInput2')
        .parent()
        .find('.el-input__clear')
        .click();
      cy.get('@nameInput2').should('have.value', '');
      cy.get('@nameInput2')
        .parent()
        .find('.el-input__clear')
        .should('not.be.visible');
      cy.get('@nameInput2')
        .parent()
        .find('.el-icon-date')
        .should('exist');

      cy.get('label')
        .contains('name3')
        .parent()
        .as('item');
      cy.get('@item')
        .find('.el-icon-search')
        .should('exist');
      cy.get('@item')
        .find('.el-icon-date')
        .should('exist');
    });
  });

  it('type', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: '/upload',
      response: { data: 'https://avatars1.githubusercontent.com/u/22042268?s=40&v=4' }
    }).as('upload');

    let formSchema = {
      type: 'object',
      properties: {
        name2: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'number'
            }
          }
        },
        name3: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'password'
            }
          }
        },
        name4: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'file',
              upload: {
                uploadUrl: '/upload',
                resField: 'data.data',
                data: {
                  name: 'daniel'
                },
                fileField: 'photo',
                accept: '.png',
                uploadText: 'Upload Now',
                headers: {
                  author: 'daniel'
                }
              }
            },
            preview: {
              type: 'image'
            }
          }
        },
        name5: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'file',
              upload: {
                uploadUrl: '/upload',
                resField: 'data.data',
                data: {
                  name: 'daniel'
                },
                constraint: {
                  maxSize: 30,
                  minSize: 10
                }
              }
            },
            preview: {
              type: 'image'
            }
          }
        },
        name6: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'file',
              upload: {
                uploadUrl: '/upload',
                resField: 'data.data',
                data: {
                  name: 'daniel'
                },
                constraint: {
                  width: 320,
                  height: 320,
                  sizeFixed: true
                }
              }
            },
            preview: {
              type: 'image'
            }
          }
        },
        name7: {
          type: 'string',
          ui: {
            widgetConfig: {
              type: 'file',
              upload: {
                uploadUrl: '/upload',
                resField: 'data.data',
                data: {
                  name: 'daniel'
                },
                constraint: {
                  width: 320,
                  height: 320,
                  sizeFixed: false
                }
              }
            },
            preview: {
              type: 'image'
            }
          }
        }
      }
    };
    common.fillInSchema(formSchema);
    common.startRun();

    cy.get('.previewArea').within(() => {
      cy.get('label')
        .contains('name2')
        .as('nameLabel2');
      cy.get('@nameLabel2')
        .next()
        .find('input')
        .as('nameInput2');
      cy.get('@nameInput2')
        .type('daniel')
        .should('have.value', '');
      cy.get('@nameInput2')
        .type('123')
        .should('have.value', '123');

      cy.get('label')
        .contains('name3')
        .as('nameLabel3');
      cy.get('@nameLabel3')
        .next()
        .find('input')
        .as('nameInput3');
      cy.get('@nameInput3')
        .type('daniel123')
        .should('have.value', 'daniel123')
        .and('have.prop', 'type', 'password');

      cy.get('label')
        .contains('name4')
        .parent()
        .within(() => {
          cy.get('button')
            .contains('Upload Now')
            .should('exist');
          common.uploadImage('assets/img/dx.png');
          cy.wait('@upload').then(xhr => {
            let uploadParams = {};
            xhr.request.body.forEach((item, key) => (uploadParams[key] = item));
            let headers = xhr.request.headers;

            cy.wrap(headers).its('author').should('equal', 'daniel')
            cy.wrap(uploadParams)
              .its('name')
              .should('equal', 'daniel');
            cy.wrap(uploadParams).should('have.property', 'photo');
          });
          cy.get('input').should('have.value', 'https://avatars1.githubusercontent.com/u/22042268?s=40&v=4');
        });

      cy.get('label')
        .contains('name5')
        .parent()
        .within(() => {
          common.uploadImage('assets/img/dx.png');
          cy.wait(100).then(() => {
            cy.get('input').should('have.value', '');
          })

          common.uploadImage('assets/img/demo1.jpg');
          cy.wait(100).then(() => {
            cy.get('input').should('have.value', '');
          })
        });

      cy.get('label')
        .contains('name6')
        .parent()
        .within(() => {
          common.uploadImage('assets/img/demo1.jpg');
          cy.wait(100).then(() => {
            cy.get('input').should('have.value', '');
          })

          common.uploadImage('assets/img/dx.png');
          cy.wait(100).then(() => {
            cy.get('input').should('have.value', '');
          })
        });

      cy.get('label')
        .contains('name7')
        .parent()
        .within(() => {
          common.uploadImage('assets/img/demo1.jpg');
          cy.wait(100).then(() => {
            cy.get('input').should('have.value', '');
          })

          common.uploadImage('assets/img/dx.png');
          cy.wait(100).then(() => {
            cy.get('input').should('have.value', 'https://avatars1.githubusercontent.com/u/22042268?s=40&v=4');
          });
        });
    });
  });

  it('autocomplete', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/autocomplete**',
      response: {
        data: [
          {
            name: 'daniel',
            desc: 'boy'
          },
          {
            name: 'sarah',
            desc: 'girl'
          }
        ]
      }
    }).as('autocomplete');

    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          ui: {
            widgetConfig: {
              autocomplete: {
                itemValueField: 'name',
                immediateShow: false,
                enumSource: [{ name: 'daniel' }, { name: 'sarah' }]
              }
            }
          }
        },
        name2: {
          type: 'string',
          ui: {
            widgetConfig: {
              autocomplete: {
                itemValueField: 'name',
                itemTemplate: '<span>{{item.name}} [{{item.desc}}]</span>',
                immediateShow: true,
                enumSourceRemote: {
                  remoteUrl: '/autocomplete',
                  paramName: 'keyword',
                  otherParams: {
                    name: 'dx: "daniel"'
                  },
                  resField: 'data'
                }
              }
            }
          }
        },
        // no otherParams && paramName
        name3: {
          type: 'string',
          ui: {
            widgetConfig: {
              autocomplete: {
                itemValueField: 'name',
                itemTemplate: '<span>{{item.name}} [{{item.desc}}]</span>',
                immediateShow: true,
                enumSourceRemote: {
                  remoteUrl: '/autocomplete',
                  resField: 'data'
                }
              }
            }
          }
        }
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('body').as('body');

    cy.get('.previewArea').within(() => {
      // Declare action elements
      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('input').type('da');
          cy.get('@body')
            .find('li:contains("daniel")')
            .click();
          cy.get('input').should('have.value', 'daniel');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('input').focus();
          cy.wait('@autocomplete').then(xhr => {
            expect(xhr.url).to.be.contains('name=daniel&keyword=');
          });
          cy.get('input').type('sa');
          cy.wait('@autocomplete').then(xhr => {
            expect(xhr.url).to.be.contains('name=daniel&keyword=sa');
          });
          cy.get('@body')
          .find('li:contains("daniel")')
          .click();
          cy.get('input').should('have.value', 'daniel');
        });

      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.get('input').focus();
          cy.wait('@autocomplete').then(xhr => {
            expect(xhr.url).to.be.equal('http://localhost:3004/autocomplete');
          });
          cy.get('@body')
          .find('li:contains("daniel")')
          .click();
          cy.get('input').should('have.value', 'daniel');
        });
    });
  });

  it('compound', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/meta',
      response: {
        data: [
          {
            id: 1,
            name: 'Boy'
          },
          {
            id: 2,
            name: 'Girl'
          }
        ]
      }
    }).as('meta');

    let formSchema = {
      type: 'object',
      properties: {
        name1: {
          type: 'string',
          ui: {
            widgetConfig: {
              compound: {
                prependLabel: 'http://',
                appendLabel: 'go',
                prependIcon: 'el-icon-search',
                appendIcon: 'el-icon-date'
              }
            }
          }
        },
        name2: {
          type: 'object',
          value: {
            gender: 2,
            name: 'sarah'
          },
          ui: {
            widget: 'input',
            widgetConfig: {
              modelField: 'name',
              compound: {
                prependSelect: {
                  itemLabelField: 'label',
                  itemValueField: 'id',
                  enumSource: [
                    {
                      id: 1,
                      label: 'Man'
                    },
                    {
                      id: 2,
                      label: 'Woman'
                    }
                  ],
                  modelField: 'gender'
                }
              }
            }
          }
        },
        name3: {
          type: 'object',
          value: {
            gender: 2,
            name: 'sarah'
          },
          ui: {
            widget: 'input',
            widgetConfig: {
              modelField: 'name',
              compound: {
                appendSelect: {
                  itemLabelField: 'label',
                  itemValueField: 'id',
                  enumSource: [
                    {
                      id: 1,
                      label: 'Man'
                    },
                    {
                      id: 2,
                      label: 'Woman'
                    }
                  ],
                  modelField: 'gender'
                }
              }
            }
          }
        },
        name4: {
          type: 'object',
          value: {
            gender: 2,
            name: 'sarah'
          },
          ui: {
            widget: 'input',
            widgetConfig: {
              modelField: 'name',
              compound: {
                prependSelect: {
                  itemLabelField: 'name',
                  itemValueField: 'id',
                  enumSourceRemote: {
                    remoteUrl: '/meta',
                    resField: 'data'
                  },
                  modelField: 'gender'
                }
              }
            }
          }
        },
        name5: {
          type: 'object',
          value: {
            gender: 2,
            name: 'sarah'
          },
          ui: {
            widget: 'input',
            widgetConfig: {
              modelField: 'name',
              compound: {
                appendSelect: {
                  itemLabelField: 'name',
                  itemValueField: 'id',
                  enumSourceRemote: {
                    remoteUrl: '/meta',
                    resField: 'data'
                  },
                  modelField: 'gender'
                }
              }
            }
          }
        },
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('body').as('body');

    cy.get('.previewArea').within(() => {
      // Declare action elements
      cy.get('label')
        .contains('name1')
        .parent()
        .within(() => {
          cy.get('div')
            .contains('http://')
            .should('exist');
          cy.get('div')
            .contains('go')
            .should('exist');
          cy.get('i.el-icon-search').should('exist');
          cy.get('i.el-icon-date').should('exist');
        });

      cy.get('label')
        .contains('name2')
        .parent()
        .within(() => {
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Woman');
          cy.get('input')
            .eq(1)
            .should('have.value', 'sarah');

          cy.get('.el-select').click();
          cy.get('@body')
            .find('li:not(:hidden)')
            .contains('Man')
            .click();
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Man');
        });

      cy.wait(500);
      cy.get('label')
        .contains('name3')
        .parent()
        .within(() => {
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Woman');
          cy.get('input')
            .eq(0)
            .should('have.value', 'sarah');

          cy.get('.el-select').click();
          cy.get('@body')
            .find('li:not(:hidden)')
            .contains('Man')
            .click();
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Man');
        });

      cy.wait(500);
      cy.get('label')
        .contains('name4')
        .parent()
        .within(() => {
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Girl');
          cy.get('input')
            .eq(1)
            .should('have.value', 'sarah');

          cy.get('.el-select').click();
          cy.get('@body')
            .find('li:not(:hidden)')
            .contains('Boy')
            .click();
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Boy');
        });

      cy.wait(500);
      cy.get('label')
        .contains('name5')
        .parent()
        .within(() => {
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Girl');
          cy.get('input')
            .eq(0)
            .should('have.value', 'sarah');

          cy.get('.el-select').click();
          cy.get('@body')
            .find('li:not(:hidden)')
            .contains('Boy')
            .click();
          cy.get('.el-select')
            .find('input')
            .should('have.value', 'Boy');
        });

      // common.submitForm();
    });
  });

  it('dx config', () => {
    let formSchema = {
      type: 'object',
      properties: {
        name0: {
          type: 'string',
        },
        name1: {
          type: 'string',
          ui: {
            widgetConfig: {
              compound: {
                appendLabel: 'dx: {{$root.name0}}'
              }
            }
          }
        }
      }
    };
    cy.window()
      .its('editor')
      .invoke('setValue', JSON.stringify(formSchema, null, 2));
    common.startRun();

    cy.get('.previewArea').within(() => {
      // Declare action elements
      cy.get('label')
      .contains('name0')
      .parent()
      .within(() => {
        cy.get('input').type('daniel')
      });

      cy.get('label')
      .contains('name1')
      .parent()
      .within(() => {
        cy.get('.el-input-group__append').contains('daniel')
      });
      // common.submitForm();
    });
  });

});
